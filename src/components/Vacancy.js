import React from 'react';
import '../components/vacancy.css'

export const Vacancy=()=>{
    return(
		<>
        <div class="container">
		<div class="parallax">
        <div class="text-div">
			<h1>Dualice</h1>
            <br/>
            <h1>Работа с нами - это прибыль</h1>
		</div>
        </div>
		<div class="text-div">
			<h1>Выполняй задания и получай деньги</h1>
		</div>
		<div class="parallax-2">
    <div class="text-div">
    <h1> Если ты студент старших курсов или выпускник, то тебе точно к нам </h1>
    </div>
    </div>
		<div class="text-div">
			<h1>Сколько мы платим?</h1>
      <br/>
      <h1>
      Разработчик – от 10.000 руб./заказ <br/> 
      Дизайнер – от 5000 руб./заказ <br/>
      Бизнес-консультант – от 1000 руб./сеанс <br/>
      Маркетолог – от 15000 руб./заказ
      </h1>
		</div>
	</div>

  <div class="text-div">
    <h1>Вакансии</h1>
  </div>
	
  <div class="card1">
    <div class="wrapper1">
      <img src="https://i.imgur.com/5UZPTUD.png" class="cover-image1" />
    </div>
    <img src="https://i.imgur.com/fcOFHCM.png" class="character1" />
  </div>



  <div class="card1">
    <div class="wrapper1">
      <img src="https://i.imgur.com/uOakUaO.png" class="cover-image1" />
    </div>
    <img src="https://i.imgur.com/baFjrPG.png" class="character1" />
  </div>

	</>
    )
}