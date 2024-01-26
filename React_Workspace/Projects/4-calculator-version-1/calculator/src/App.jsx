import Display from './components/display'
import ButtonContainer from './components/ButtonContainer'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
      

    </div>
  )
}

export default App
