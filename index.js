const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {

    const ramenImages = document.querySelectorAll('#ramen img');
    const ramenName = document.querySelector('.name');
    const ramenRestaurant = document.querySelector('.restaurant');
    const ratingDisplay = document.querySelector('#rating-display');
    const commentDisplay = document.querySelector('#comment-display');
    const newRamenForm = document.querySelector('#new-ramen');

    let ramenData = [
        {
            name: 'Shoyu',
            restaurant: 'Ichiran',
            image: 'shoyu.jpg',
            rating: 9,
            comment: 'Delicious!',
        },
        {
            name: 'Gyukotsu',
            restaurant: 'Ichiran',
            image: 'gyukotsu.jpg',
            rating: 8,
            comment: 'Mouth-watering.',
        },
        {
            name: 'Naruto',
            restaurant: 'Ramen Nagi',
            image: 'naruto.jpg',
            rating: 7,
            comment: 'Yummy.',
        },
        {
            name: 'Nirvana',
            restaurant: 'Ramen-ya',
            image: 'nirvana.jpg',
            rating: 8,
            comment: 'Sweet and tasty.',
        },
        {
            name: 'Kojiro',
            restaurant: 'Menya',
            image: 'kojiro.jpg',
            rating: 6,
            comment: 'Very flavorful.',
        },
        
    ];

    ramenData = ramenData.concat(ramens.map(ramen => ({
        name: ramen.name,
        restaurant: ramen.restaurant,
        image: ramen.image,
        rating: ramen.rating,
        comment: ramen.comment
    })));

    function displayRamenDetails(index) {
        const ramen = ramenData[index];
        ramenName.textContent = ramen.name;
        ramenRestaurant.textContent = ramen.restaurant;
        ratingDisplay.textContent = ramen.rating || 'N/A'; 
        commentDisplay.textContent = ramen.comment || '';  
        document.querySelector('.holder').src = ramen.image;
    }

    ramenImages.forEach((img, index) => {
        img.addEventListener('click', () => displayRamenDetails(index));
    });

    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#new-name').value;
        const restaurant = document.querySelector('#new-restaurant').value;
        const image = document.querySelector('#new-image').value;
        const rating = document.querySelector('#new-rating').value;
        const comment = document.querySelector('#new-comment').value;

        const newRamen = {
            name,
            restaurant,
            image,
            rating,
            comment
        };

        ramenData.push(newRamen);

        const newImg = document.createElement('img');
        newImg.src = newRamen.image;
        newImg.alt = newRamen.name;

        newImg.addEventListener('click', () => displayRamenDetails(ramenData.length - 1));

        document.querySelector('#ramen').appendChild(newImg);

        newRamenForm.reset();
    });

    
    if (ramenData.length > 0) {
        displayRamenDetails(0);
    }

});