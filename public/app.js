document.querySelectorAll(".price").forEach((node) => {
	node.textContent = new Intl.NumberFormat("uk-UK", {
		currency: "uah",
		style: "currency",
	}).format(node.textContent);
});

const basket = document.querySelector("#basket");

if (basket) {
	basket.addEventListener("click", (event) => {
		if (event.target.classList.contains("js-remove")) {
			const id = event.target.dataset.id;
			console.log(id);

			fetch("/basket/remove/" + id, {
				method: "delete",
			})
				.then((res) => res.json())
				.then((basket) => {
					console.log(basket);
				});
		}
	});
}
