// import PropTypes from 'prop-types'
import '../index.css';
import Button from './Button'
const Header = (props) => {
const onClick = () => {
  console.log('Click')
}

  return (
    <header>
        <h1 >{props.title}</h1>
        <Button color='green' text='Add'
        onClick = {onClick}
        />
        
    </header>
  )
}

// Header.defaultProps = {
//     title: 'Task tracker',
// }
// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

//CSS in Js
// const headingStyle = {
//   color: 'red', 
//   background: 'black' 
// }
export default Header