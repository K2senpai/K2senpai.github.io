let button_grid = document.querySelectorAll('.favoris_filter button')
let grid_item_list = document.querySelectorAll(".grid_item_list")
button_grid.forEach(function (element) {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        button_grid = Array.from(button_grid)
        const active_element = button_grid.filter(button => button.classList.contains("active_button_favoris"))
        active_element[0].classList.remove("active_button_favoris")
        if (!element.classList.contains("active_button_favoris")) {
            element.classList.add("active_button_favoris")
            grid_item_list = Array.from(grid_item_list)
            const active_grid = grid_item_list.filter(grid => grid.classList.contains("active_grid_item"))
            active_grid[0].classList.remove("active_grid_item")
            if (element.classList.contains("button_tutoriel_list")) {
                const grid_item_list_element = grid_item_list.filter(grid_item => grid_item.classList.contains("tutoriel_grid"))
                grid_item_list_element[0].classList.add("active_grid_item")
            }
            else if (element.classList.contains("button_favoris_list")) {
                const grid_item_list_element = grid_item_list.filter(grid_item => grid_item.classList.contains("favoris_grid"))
                grid_item_list_element[0].classList.add("active_grid_item")
            }
            else if (element.classList.contains("button_evenement_list")) {
                const grid_item_list_element = grid_item_list.filter(grid_item => grid_item.classList.contains("evenement_grid"))
                grid_item_list_element[0].classList.add("active_grid_item")
            }
        }
    })
})