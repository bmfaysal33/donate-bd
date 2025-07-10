


                // Noakhali Section Done 

           document.getElementById('btn-noakhali').addEventListener('click', function(){

                const noakhaliInputAmount = inputValueById('input-noakhali');

                const noakhaliBalance = textValueById('noakhali-balance');

                const noakhaliNewBalance = noakhaliBalance + noakhaliInputAmount ; 

                document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;


            })


            










