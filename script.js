function replaceShortcodes() {
    const shortcodes = {
       pow:  { name: 'Watch', regex: /\[sgt id='(.*?)'\]/g,  url: 'https://fastdramahd.com/p/' },
       pod: { name: 'Download', regex: /\[egt id='(.*?)'\]/g, url: 'https://fastdramahd.com/p/' },
    };

    // Select elements with any of the target classes
    const contentContainers = document.querySelectorAll('.watch-options');

    contentContainers.forEach(contentContainer => {
        let content = contentContainer.innerHTML;
        for (const key in shortcodes) {
            if (shortcodes.hasOwnProperty(key)) {
                content = content.replace(shortcodes[key].regex, (match, id) => {
                    return `<a href='${shortcodes[key].url}${id}' target='_blank' class="f-links">
                                ${shortcodes[key].name}
                            </a>`;
                });
            }
        }
        contentContainer.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', replaceShortcodes);