export function createTag(container,input,value='') {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        const span = document.createElement('span');
        span.textContent = value==='' ? input.value : value;
        tag.appendChild(span);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.classList.add('transparent');
        removeButton.classList.add('removeButton');
        removeButton.addEventListener('click', () => {
            tag.remove();
        });
        tag.appendChild(removeButton);

        container.insertBefore(tag, input);
        input.value = '';
}