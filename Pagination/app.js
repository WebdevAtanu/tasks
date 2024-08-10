fetch('https://api.itbook.store/1.0/new')
    .then(res => res.json())
    .then(json => {
        var data = json.books;
        const itemsPerPage = 5;
        let currentPage = 1;

        function renderData() {
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedData = data.slice(start, end);

            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = ''; //clear the container. load more function can be done. 
            paginatedData.forEach(item => {
            const div = document.createElement('div');
                div.innerHTML = `
            <img src="${item.image}" alt="">
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
                `;
            dataContainer.appendChild(div);
            div.setAttribute('class','card');
            });
        }

        function renderPagination() {
            const pageCount = Math.ceil(data.length / itemsPerPage);
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            for (let i = 1; i <= pageCount; i++) {
                const li = document.createElement('li');
                li.textContent = i;
                if (i === currentPage) {
                    li.classList.add('active');
                }
                li.addEventListener('click', () => {
                    currentPage = i;
                    renderData();
                    renderPagination();
                });
                pagination.appendChild(li);
            }
        }

        renderData();
        renderPagination();

    })
    .catch(error => {
        console.log(error)
    });