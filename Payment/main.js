let destPrice = document.getElementById("price"),
	btn1 = document.getElementById("m-pay"),
	btn2 = document.getElementById("pay"),
	ipText = document.getElementById("ip-text"),
	percent = document.getElementById("percent"),
	pStatus = document.getElementById("p-status"),
	cText = document.getElementById("c-text"),
	dText = document.getElementById("d-text"),
	cMoney = document.getElementById("c-money"),
	dMoney = document.getElementById("d-money"),
	cd;

	btn2.style.display = "none";
	ipText.style.display = "none";
	percent.style.display = "none";
	cText.style.display = "none";
	dText.style.display = "none";


	
	



	destPrice.innerText = Math.floor(Math.random()*10000);
	


	btn1.onclick = () => {
	btn1.style.display = "none"
	btn2.style.display = "inline";
	ipText.style.display = "inline";
	}

	btn2.addEventListener('click', function(){
		let amount = ipText.value;
		if (amount === "") {
			alert("No Payment Made");
		}
		else{
			if(confirm("Are you sure you want to make Payment?")){
				if(amount !== destPrice.innerText ){
			alert("pay exact amount");
				}
				else{
					btn2.style.display = "none";
					ipText.style.display = "none";
					pStatus.innerHTML = "Payment made successfully";
					pStatus.style.color = "green";
					percent.style.display = "block";
					cText.style.display = "block";
					dText.style.display = "block";
					cText.style.color = "black";
					dText.style.color = "purple";
					cMoney.innerText = Math.floor(amount * 0.3);
					dMoney.innerText = Math.floor(amount * 0.7);






				}

			}
		}
	})
	
console.log(cd);
