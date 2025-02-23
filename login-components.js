import { loginUser, registerUser } from "./api.js";
//import { formatDateToRu, formatDateToUs } from "./lib/formarDate/formatDate.js";
import { format } from "date-fns";

//const formatDate = (date) => {
 // return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}` }

 //${formatDate(new Date(comment.date))}
export function renderLoginComponent ({appEl, setToken, fetchFunction, setName, comments}){
  let isLoginMode = true;

const commentsHtmlNotEdit = comments.map ((comment, index) => {
 // const createDate = format(new Date(comment.date), "yyyy-MM-dd HH.mm.ss"); не работает корректно, отображается год-день-месяц
  const now = new Date();
 // format(now, "yyyy-MM-dd HH.mm.ss");
  
  return `    <li class = 'comment' class = 'whiteSpace'   data-index ="${index}"> 
  <div class = 'comment-header'>
      <div>${comment.name}</div> 
      <div>${format(now, "yyyy-MM-dd HH.mm.ss")}</div>
     </div>  
     
         <div class = 'comment-body'>
       <div class = "comment-text">
       ${comment.textElement}
       </div>
       </div>
     
     
       <div class = "comment-footer" >
         <div class = 'likes'>      
             <span class="likes-counter">${comment.likesNumber}</span>
         <button data-index = '${index}' class=" like-button ${comment.propertyColorLike}"></button>
                 </div> 
     </div>

  </li>`
}).join('');


const appHTML = `<div class="container">

      <ul class="comments">
       ${commentsHtmlNotEdit}
      </ul> <br>   
      <div>Чтобы добавить комментарий, <a  id="login-link" style = "color: red" href="#">нужно авторизоваться</a></div>
      </div>`;
    
      appEl.innerHTML = appHTML;

document.getElementById('login-link').addEventListener('click', () => {
  const renderForm = () => {
             const appHtml = `   <div class="container" id = "container">
           <h3> Форма ${isLoginMode ? "входа" : "регистрации" }  </h3>
      <div class = 'comment'>
      ${isLoginMode ? "" :  ` Имя
      <input type="text"class = "add-form-name" id="name-input"class="input"
    placeholder="Введите имя" />
    <br/>
    <br/>  `}
   
          Логин 
            <input type="text"class = "add-form-name"  id="login-input"class="input"
          placeholder="Введите логин" />
          <br/>
          <br/>
          Пароль
          <input  type="password" class = "add-form-name"  id="password-input"class="input"
          placeholder="Введите пароль"/>
          <br/> 
          <br/> 
          <br/> 
          <button id="login-button"  class ="add-form-button"> ${isLoginMode ? "Войти" : "Перейти к регистрации"}</button>
          <button id="toggle-button"class ="add-form-button" >Перейти  ${isLoginMode ? "к регистрации" : " ко входу"}</button>`
  
          appEl.innerHTML = appHtml;

      
       document.getElementById("login-button").addEventListener('click', () => {
      if (isLoginMode) {
         const login = document.getElementById('login-input').value;
         const password = document.getElementById('password-input').value;
  if (!login){
    alert ("Введите логин");
  }
  if (!password){
    alert ("Введите пароль");
  }
        loginUser({
          login: login,
          password: password})
          .then ((user) => {
   
       setToken(`Bearer ${user.user.token}`);
       setName(user.user.name);
      
      fetchFunction();
        }).catch ((error) => {
          alert (error.message)
        })    
      } else {
           const login = document.getElementById('login-input').value;
        const password = document.getElementById('password-input').value;
        const name = document.getElementById('name-input').value;
        if (!name){
          alert ("Введите имя");
        }
          if (!login){
            alert ("Введите логин");
          }
          if (!password){
            alert ("Введите пароль");
          }
      
                registerUser({
                  login: login,
                  password: password,
                  name: name,
                })
                  .then ((user) => {
                setToken(`Bearer ${user.user.token}`) 
              fetchFunction();
                }).catch ((error) => {
                  //TODO выводить алерт красиво
                  alert (error.message)
                }) 


      }
        });
  
        document.getElementById("toggle-button").addEventListener('click', () => {
         isLoginMode = !isLoginMode;
        renderForm();
        })
  
  }
  
  renderForm();
}

 
)}
