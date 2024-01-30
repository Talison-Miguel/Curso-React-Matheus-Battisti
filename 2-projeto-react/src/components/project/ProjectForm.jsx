import { useEffect, useState } from 'react'
import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { SubmitButton } from '../form/SubmitButton'
import styles from './projectForm.module.css'

export function ProjectForm({ btnText }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("http://localhost:5000/categories", {
                    method: "GET",
                    headers: {
                        "content-Type": "application/json"
                    }
                });

                const data = await response.json();
                setCategories(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();    
    }, [])

    

    return ( 
        <form className={styles.form}>
            <Input type={'text'} text={'Nome do projeto'} name={'name'} placeholder={'Insira o nome do projeto'}/>
            <Input type={'number'} text={'Orçamento do projeto'} name={'budget'} placeholder={'Insira o orçamento total'}/>
            <Select name={'categoryId'} text={'Selecione a categoria'} options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}