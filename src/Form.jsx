import  React from "react";
import "./form.css"

export class Form extends React.Component{
    constructor() {
        super();
        this.state={
                valueName: "",
                valueTel: "",
                valueEmail: ""
            }
        }
    handleClick = () =>{
        const tel = Number(this.state.valueTel)
        {this.state.valueName && this.state.valueTel && this.state.valueEmail !== "" &&
        alert(`Ваше ФИО: ${this.state.valueName}
        Ваш номер телефона: ${tel}
        Ваш email адрес: ${this.state.valueEmail}`)}
    }
    render() {
        return(
            <div className="wrapper">
                <h1>Регистрация</h1>
                <form className='form' action="">
                    <label>ФИО <input onChange={(e) =>this.setState({valueName: e.target.value})} type="text" value={this.state.valueName}/></label>
                    <label>Номер телефона <input type="tel" onChange={(e)=>this.setState({valueTel: e.target.value})} value={this.state.valueTel}/></label>
                    <label>E-mail <input type="email" onChange={(e)=>this.setState({valueEmail: e.target.value})} value={this.state.valueEmail}/></label>
                    <button onClick={this.handleClick}>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}