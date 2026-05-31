
            const list = document.getElementById('workouts');
            window.addSet = function() {
                const ex = prompt("Exercise name:");
                if(!ex) return;
                const item = document.createElement('li');
                item.innerText = `${ex} - 3 Sets x 10 Reps`;
                list.appendChild(item);
            }
        