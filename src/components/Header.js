// import PropTypes from 'prop-types'
import '../index.css';
import Button from './Button'

const Header = (props) => {
// const onClick = () => {
//   console.log('Click')
// };

  return (
    <header className="header">
        <h1 >{props.title}</h1>
        <Button 
        color={props.showAdd ? 'red' : 'green'} 
        text={props.showAdd ? 'Close' : 'Add'}
        onClick = {props.onAdd}
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