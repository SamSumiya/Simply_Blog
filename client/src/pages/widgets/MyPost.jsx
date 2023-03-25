import { useContext, useState } from 'react'
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Card,
  Typography,
  useTheme,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { EditOutlined } from '@mui/icons-material'
import { ThemeContext } from 'App'
import { FlexBetween } from 'components/FlexBetween'
import Dropzone from 'react-dropzone'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import FormInput from './FormInput'
// import { sub } from 'date-fns'

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
}
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
]

export const MyPost = () => {
  const isNonMobile = useMediaQuery('(min-width: 840px)')
  const { userInfo } = useContext(ThemeContext)
  const { palette } = useTheme()
  const { userPosts } = useContext(ThemeContext)
  const [post, setPost] = userPosts
  const { user, token } = userInfo[0]
  const navigate = useNavigate()

  const [values, setValues] = useState({
    title: '',
    summary: '',
  })

  const [content, setContent] = useState(null)

  const formInputs = [
    {
      id: 1,
      type: 'text',
      name: 'title',
      placeholder: 'Title',
      pattern: '^[A-Za-z0-9]{3,20}$',
      required: true,
    },
    {
      id: 2,
      type: 'text',
      name: 'summary',
      placeholder: 'Summary',
      pattern: '^[A-Za-z0-9]{10,100}$',
      required: true,
    },
  ]

  const createNewPost = async () => {
    const updatedValues = {
      userId: user._id,
      ...values,
      content: content,
      firstName: user.firstName,
      lastName: user.lastName,
    }
    const data = new FormData()
    data.set('title', values.title)
    data.set('summary', values.summary)
    data.set('content', values.content)
    const newPost = await fetch('http://localhost:3002/posts/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedValues),
    })
    navigate('/')
    setPost(post)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <Card sx={{ height: '100%', padding: 3, overflow: 'auto',  overflowX: 'hidden'}}>
      <form className="submit-form" action="" onSubmit={handleSubmit}>
        {formInputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Box sx={{ height: '100vh' }}>
          <ReactQuill
            className="quill-class"
            value={content}
            modules={modules}
            formats={formats}
            onChange={(newValue) => setContent(newValue)}
          ></ReactQuill>
        </Box >
        <Box>
          <Button
            variant="contained"
            sx={{ width: '8rem', display: 'flex', justifySelf: 'center', mb:'1.6rem'}}
            type="submit"
            onClick={createNewPost}
          >
            Submit
          </Button>
          </Box>
      </form>
    </Card>
  )
}
