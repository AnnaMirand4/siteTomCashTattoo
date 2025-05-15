import style from '../styles/componets/text.module.css'

const Text = ({ content }) => {
  return (
    <p className={style.text} style={{ whiteSpace: 'pre-line' }}>
      {content}
    </p>
  )
}


export default Text