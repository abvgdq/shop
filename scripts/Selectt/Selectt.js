export const ArmSelect = () => {
    const selectSeatAll = document.querySelectorAll('.select__seat');
    selectSeatAll.forEach(item => {
        item.addEventListener("click", function(event){
            const currentEl = event.target.classList[0];
                if (currentEl === "select__chevron-img") {
                    item.querySelector('.select__seat-hidden').classList.toggle('is-active')
                    item.querySelector('.select__chevron-img').classList.toggle('is-active__rotate')
                }
                if (currentEl === "value") {
                    item.querySelector('.value-active').textContent = event.target.textContent;
                    item.querySelector('.select__seat-hidden').classList.remove('is-active')
                }
            })
        })
}
