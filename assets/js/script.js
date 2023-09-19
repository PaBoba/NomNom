const apiCallButton = $('.button-primary')
const ul = $('<ul></ul>');
const dataEl = $('.apiData');
const apiEl = [
    'ApiCall1',
    'ApiCall2',
    'ApiCall3',
    'ApiCall4',
    'ApiCall5',
    'ApiCall6',
];

function renderApi() {
    
    for (let i = 0; i <= apiEl.length - 1; i++) {
        let li = document.createElement('li');
        let apiList = apiEl[i];
        console.log(apiList);
        li.innerHTML = apiList;
        ul.append(li); 
        dataEl.append(ul);
    }
}
apiCallButton.on('click', function() {
    renderApi();    
    apiCallButton.hide();
});
