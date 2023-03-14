import { useState, useContext } from 'react'
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from '@mui/material'
import * as yup from 'yup'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { FlexBetween } from 'components/FlexBetween'
import { ThemeContext } from 'App'
import Dropzone from 'react-dropzone'
import { EditOutlined } from '@mui/icons-material'

const initialValueRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const initialValueLogin = {
  email: '',
  password: '',
}

const registerSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('Invalud Email').required('required'),
  password: yup.string().required('required').min(4, 'Must be longer than 3'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .min(4, 'Must be longer than 3')
    .required('required')
})

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalud Email').required('required'),
  password: yup.string().required('required'),
})

export const Form = () => {
  const { userInfo } = useContext(ThemeContext)
  const [user, setUser] = userInfo
  const [pageType, setPageType] = useState('login')
  const { palette } = useTheme()
  const navigate = useNavigate()
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const isLogin = pageType === 'login'
  const isRegister = pageType === 'register'

  const comparePasswords = (value) => {
    const { password, confirmPassword } = value

    if (password !== confirmPassword) {
      throw new Error('Do not match...')
    }
  }

  const register = async (values, onSubmitProps) => {
    const formData = new FormData()
    for (let value in values) {
      formData.append(value, values[value])
    }
    // no error is present for a picture not being added. The error message in the console isn't cler because we get acnnot read property of undefined (name)

    // this comes from values, when we don't have picture, values.picture is null, so we can do .name
    formData.append('picturePath', values.picture ? values.picture.name : '')

    const savedUserResponse = await fetch(
      'http://localhost:3002/auth/register',
      {
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        method: 'POST',
        // body: JSON.stringify(values),
        body: formData,
      },
    )

    const savedUser = await savedUserResponse.json()
    onSubmitProps.resetForm()

    if (savedUser) {
      setPageType('login')
    }
  }

  const displayError = () => {
    const el = document.getElementById('error')
    el.innerHTML = 'Email or password is invalid , please try again.'
    el.style.padding = '.7rem'
    el.style.fontWeight = 'bold'
  }

  const login = async (values, onSubmitProps) => {
    const loggedInRespose = await fetch('http://localhost:3002/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    const loggedIn = await loggedInRespose.json()
    onSubmitProps.resetForm()

    if (loggedInRespose.status !== 400) {
      setUser({
        user: loggedIn.user,
        token: loggedIn.token,
      })
      navigate('/')
    } else {
      displayError()
      navigate('/login')
    }
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps)
    if (isRegister) await register(values, onSubmitProps)
  }

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValueLogin : initialValueRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
            }}
          >
            {isRegister && (
              <>
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                  sx={{ gridColumn: 'span 2' }}
                />
                <Box
                  gridColumn="span 4"
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius="5px"
                  padding="1rem"
                >
                  <Dropzone
                    accpetFiles=".jpeg,.jpg,.png"
                    multiple={false}
                    onDrop={(accpetedFiles) =>
                      setFieldValue('picture', accpetedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border={`2px dashed ${palette.primary.main}`}
                        p="1rem"
                        sx={{ '&:hover': { cursor: 'pointer' } }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <p> Add Picture Here</p>
                        ) : (
                          <FlexBetween>
                            <Typography> {values.picture.name}</Typography>
                            <EditOutlined />
                          </FlexBetween>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}
            {isLogin && (
              <Box id="error" sx={{ color: 'white', backgroundColor: 'red', width:'46%'}} gridColumn="span 5"></Box>
            )}
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: 'span 4', color: palette.neutral.dark }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: 'span 4' }}
            />
            {isRegister && (
              <>
                <TextField
                  label="Confirm Password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
                  sx={{ gridColumn: 'span 4' }}
                />
              </>
            )}
          </Box>
          <Button
            fullWidth
            type="submit"
            sx={{
              m: '2rem 0',
              p: '1rem',
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              '&:hover': { color: palette.primary.main },
            }}
          >
            {isLogin ? 'Login' : 'Register'}
          </Button>
          <Typography
            onClick={() => {
              setPageType(isLogin ? 'register' : 'login')
              resetForm()
            }}
            sx={{
              textDecoration: 'underline',
              color: palette.primary.main,
              '&:hover': {
                cursor: 'pointer',
                color: palette.primary.light,
              },
            }}
          >
            {isLogin
              ? "Don't have an account? Sign up here."
              : 'Already have an account, login here.'}
          </Typography>
        </form>
      )}
    </Formik>
  )
}
