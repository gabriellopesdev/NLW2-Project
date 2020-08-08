import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Select from '../../components/Select'
import api from '../../services/api'
import './styles.css'

function TeacherList() {

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [teacherList, setTeacherList] = useState([])

    async function searchTechers(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeacherList(response.data)

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTechers}>                   
                    <Select 
                        name="subject" 
                        label="Matérias" 
                        value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                        options={[
                            { value:'Artes', label: 'Artes'},
                            { value:'Biologia', label: 'Biologia'},
                            { value:'Física', label: 'Física'},                            
                            { value:'Geografia', label: 'Geografia'},
                            { value:'História', label: 'História'},
                            { value:'Matemática', label: 'Matemática'},
                            { value:'Química', label: 'Química'},
                        ]}
                    />
                   
                    <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        value={week_day}
                            onChange={(e) => {
                                setWeekDay(e.target.value)
                            }}
                        options={[
                            { value:'0', label: 'Domingo'},
                            { value:'1', label: 'Segunda-feira'},
                            { value:'2', label: 'Terça-feira'},
                            { value:'3', label: 'Quarta-feira'},                            
                            { value:'4', label: 'Quinta-feira'},
                            { value:'5', label: 'Sexta-feira'},
                            { value:'6', label: 'Sábado'},
                            
                        ]}
                    />
                    <Input 
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                        type="time" 
                        name="time" 
                        label="Hora" 
                    />     
                    <button type="submit">
                        Buscar
                    </button>               
                </form>
            </PageHeader>    
            <main>
              {
                  teacherList.map( (teacher: Teacher) => {
                      return (
                        <TeacherItem key={teacher.id} teacher={teacher} />
                      )
                  })
              }
              
            </main>
        </div>
    )
}

export default TeacherList