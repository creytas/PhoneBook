let inputLastName = document.querySelector('#nom');
let inputFirstName = document.querySelector('#prenom');
let inputPhoneNumber = document.querySelector('#telephone');
let inputGroup = document.querySelector('#groupe');
let inputBio = document.querySelector('#bio');
let inputFile = document.querySelector('#upload-pix');
let uploadedPictureContainer = document.querySelector('.uploaded-pix');

inputFirstName.maxLength = 25;
inputLastName.maxLength = 25;
inputPhoneNumber.maxLength = 17;

let btnCreer = document.querySelector('#submit');
let btnReinit = document.querySelector('#reset');
let btnSerarch = document.querySelector('#search');
inputFile.addEventListener('change', function(e){
    e.preventDefault();
    let uploadedPicture = document.createElement('img');
    if(uploadedPictureContainer.lastChild !== null){
        let picture = uploadedPictureContainer.firstChild;
        uploadedPictureContainer.removeChild(picture);
    }

    if (inputFile.files && inputFile.files[0]) {
        uploadedPicture.src = URL.createObjectURL(inputFile.files[0]);
    } else {
        uploadedPicture.src = 'img/user_21998.svg';
    }
    uploadedPicture.classList.add('img-preview');
    uploadedPictureContainer.appendChild(uploadedPicture);
    console.dir(uploadedPicture);
});
btnReinit.addEventListener('click', function(e){
    uploadedPictureContainer.removeChild(uploadedPictureContainer.lastChild);
});
btnCreer.addEventListener('click', function(e) {
    e.preventDefault();

    let firstName = inputFirstName.value;
    let lastName = inputLastName.value;
    let phoneNumber = inputPhoneNumber.value;
    let mail = 'creytas@gmail.com';
    let groupContact = inputGroup.value;
    let bio = inputBio.value;
    let profilePicture = document.createElement('img');

    // preparing the div which will contain the contact card
    let fiche = document.createElement('div');
    fiche.classList.add('fiche');
    let ficheItems = document.createElement('div');
    ficheItems.classList.add('flex-row');
    let fichePicture = document.createElement('div');
    let ficheInfo = document.createElement('div');
    ficheInfo.classList.add('flex-col');
    let containerList = document.querySelector('#list-body');
    //it's here that the 'fiche' block start
    // delete button
    let btnDelete = document.createElement('img');
    btnDelete.classList.add('btn-delete');
    btnDelete.setAttribute('src', 'img/close.svg');
    btnDelete.setAttribute('title', 'Supprimer');
    fiche.appendChild(btnDelete);
    //it's here that the 'ficheItems' block for the 'fichePicture' block start            
    //it's here that the 'fichePicture' block start
    if (inputFile.files && inputFile.files[0]) {
        profilePicture.src = URL.createObjectURL(inputFile.files[0]);
    } else {
        profilePicture.src = 'img/user_21998.svg';
    }
    profilePicture.classList.add('img-profile');
    fichePicture.appendChild(profilePicture);
    //it's here that the 'fichePicture' block ends
    ficheItems.appendChild(fichePicture);
    //it's here that the 'ficheItems' block for the 'fichePicture' block ends
    //it's here that the 'ficheItems' block for the 'ficheInfo' block start
    //it's here that the 'ficheInfo' block start
    // first block of elements added
    let allName = document.createElement('div');
    allName.classList.add('flex-row');

    let firstIco = document.createElement('img');
    firstIco.setAttribute('src', 'img/user_21998.svg');
    firstIco.classList.add('icon');
    allName.appendChild(firstIco);

    let name = document.createElement('p');
    name.innerText = firstName + ' ' + lastName;
    allName.appendChild(name)
    ficheInfo.appendChild(allName);
    // second block of elements added
    let groupBlockBis = document.createElement('div');
    groupBlockBis.classList.add('flex-row');

    let secondIcoBis = document.createElement('img');
    secondIcoBis.setAttribute('src', 'img/mobile_phone_smartphone_icon_179542.svg');
    secondIcoBis.classList.add('icon');
    groupBlockBis.appendChild(secondIcoBis);

    let numTel = document.createElement('p');
    numTel.innerText = phoneNumber;
    groupBlockBis.appendChild(numTel);
    ficheInfo.appendChild(groupBlockBis);
    // third block of elements added
    let groupBlock = document.createElement('div');
    groupBlock.classList.add('flex-row');

    let secondIco = document.createElement('img');
    secondIco.setAttribute('src', 'img/users_21945.svg');
    secondIco.classList.add('icon');
    groupBlock.appendChild(secondIco);

    let group = document.createElement('p');
    group.innerText = groupContact;
    groupBlock.appendChild(group);
    ficheInfo.appendChild(groupBlock);
    // fourth block of elements added
    let bioBlock = document.createElement('div');
    bioBlock.classList.add('flex-row');

    let thirdIco = document.createElement('img');
    thirdIco.setAttribute('src', 'img/chat_left_quote_icon_160289.svg');
    thirdIco.classList.add('icon');
    bioBlock.appendChild(thirdIco);

    biography = document.createElement('p');
    biography.innerText = bio;
    biography.classList.add('text-area');
    bioBlock.appendChild(biography);
    ficheInfo.appendChild(bioBlock);
    //it's here that the 'ficheInfo' block ends            
    ficheItems.appendChild(ficheInfo);
    //it's here that the 'ficheItems' block ends
    fiche.appendChild(ficheItems);
    containerList.appendChild(fiche);
    // Delete button
    btnDelete = document.getElementsByClassName('btn-delete');
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener('click', function(e) {
            containerList.removeChild(this.parentNode);
        });
    }
    //it's here that the 'fiche' block ends
});