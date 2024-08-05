document.addEventListener("DOMContentLoaded", function () { // chama a função depois que o DOM é carregado
    const scrollContainerSeller = document.querySelector(".plan__card-container--seller"); // seleciona o card container
    const leftScrollSeller = document.querySelector(".card__scroll-left--seller"); // seleciona o botão esquerdo
    const rightScrollSeller = document.querySelector(".card__scroll-right--seller"); // seleciona o botão direito

    const scrollContainerDistributor = document.querySelector(".plan__card-container--distributor"); // distributor
    const leftScrollDistributor = document.querySelector(".card__scroll-left--distributor");
    const rightScrollDistributor = document.querySelector(".card__scroll-right--distributor");

    function checkScroll(leftButton, rightButton, scrollContainer) { // verifica a posição do scroll
      return function() { // retorna a função com os argumentos definidos, e não o resultado da função
        const currentScroll = scrollContainer.scrollLeft; // atribui a posição do scroll à variável
        const scrollLength = scrollContainer.scrollWidth - scrollContainer.clientWidth; // comprimento do card-container menos o comprimento visível do card-container
        if (currentScroll === 0) { // verifica se o scroll está à 0px da esquerda, 
          leftButton.setAttribute("disabled", "true"); // se sim, desativa o botão esquerdo e
          rightButton.removeAttribute("disabled"); // ativa o botão direito
        } else if (currentScroll === scrollLength) { // senão veja se a posição do scroll é igual ao comprimento do scroll
          rightButton.setAttribute("disabled", "true"); // se sim, desativa o botão direito e
          leftButton.removeAttribute("disabled"); // ativa o botão esquerdo
        } else { // se não, isso significa que o scroll está no meio e portanto, os dois botões são ativados
          leftButton.removeAttribute("disabled");
          rightButton.removeAttribute("disabled");
        }
      }
    };

    scrollContainerSeller.addEventListener("scroll", checkScroll(leftScrollSeller, rightScrollSeller, scrollContainerSeller)); // chama a função checkScroll sempre que o evento scroll acontece
    window.addEventListener("resize", checkScroll(leftScrollSeller, rightScrollSeller, scrollContainerSeller)); // chama a função checkScroll sempre que o tamanho da janela do navegador muda
    checkScroll(leftScrollSeller, rightScrollSeller, scrollContainerSeller); // chama a função checkScroll pela primeira vez

    scrollContainerDistributor.addEventListener("scroll", checkScroll(leftScrollDistributor, rightScrollDistributor, scrollContainerDistributor)); // distributor
    window.addEventListener("resize", checkScroll(leftScrollDistributor, rightScrollDistributor, scrollContainerDistributor));
    checkScroll(leftScrollDistributor, rightScrollDistributor, scrollContainerDistributor);

    function leftScroll(scrollContainer) { // ação do botão esquerdo
        return function() {
        scrollContainer.scrollBy({
          left: -400,
          behavior: "smooth"
        });
        }
    }

    function rightScroll(scrollContainer) { //ação do botão direito
      return function() {
        scrollContainer.scrollBy({
          left: 400,
          behavior: "smooth"
      });
      }
    }

    leftScrollSeller.addEventListener("click", leftScroll(scrollContainerSeller));
    rightScrollSeller.addEventListener("click", rightScroll(scrollContainerSeller));

    leftScrollDistributor.addEventListener("click", leftScroll(scrollContainerDistributor));
    rightScrollDistributor.addEventListener("click", rightScroll(scrollContainerDistributor));
  })