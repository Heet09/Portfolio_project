function toggleDescription() {
    var description = document.getElementById('description');
    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
    } else {
        description.classList.add('hidden');
    }
}
