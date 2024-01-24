import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { SubmitButton } from '../form/SubmitButton'
import styles from './projectForm.module.css'

export function ProjectForm({ btnText }) {
    return ( 
        <form className={styles.form}>
            <Input type={'text'} text={'Nome do projeto'} name={'name'} placeholder={'Insira o nome do projeto'}/>
            <Input type={'number'} text={'Orçamento do projeto'} name={'budget'} placeholder={'Insira o orçamento total'}/>
            <Select name={'categoryId'} text={'Selecione a categoria'}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}