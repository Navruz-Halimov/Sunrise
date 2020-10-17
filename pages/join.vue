<template>
  <div class="join__wrapper">
    <div class="join__header">
      <div class="join__title">
        <h1>Join World of Sunrise</h1>
      </div>
    </div>
    <b-container>
      <b-row>
        <b-col class="join__title" lg="12">
          <h2>Join World of Sunrise. It’s easy and rewarding.</h2>
          <p>Join World of Hyatt, your new loyalty program. It’s a world filled with thoughtful perks, personal connections
            and amazing experiences. And it revolves around you. Beyond great locations, luxurious rooms and top-notch
            amenities, World of Hyatt connects you to the people, places and stories at the heart of your world. For more
            information see our FAQs.</p>
          <span>All fields are required unless noted as optional.</span>
        </b-col>
        <b-col class="join__content" lg="12">
          <b-form class="sign__form">
            <b-row>
              <b-col lg="2" offset-lg="1">
                <b-form-group
                  label="Prefix (optional)"
                  label-for="select" >
                  <select id="select" class="adults__capacity">
                    <option value="0" selected disabled>Select...</option>
                    <option value="1">Mr.</option>
                    <option value="2">Dr.</option>
                    <option value="3">Mrs.</option>
                    <option value="4">Miss</option>
                    <option value="5">Ms.</option>
                  </select>
                </b-form-group>
              </b-col>
              <b-col lg="4">
                <b-form-group
                  label="Given / First Name"
                  label-for="username">
                  <b-form-input class="join__input" type="text" id="username" required/>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="4">
                <b-form-group
                  label="Surname / Last Name"
                  label-for="name">
                  <b-form-input class="join__input" type="text" id="name" required/>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="4" offset-lg="1">
                <b-form-group
                  label="Email Address"
                  label-for="email">
                  <b-form-input class="join__input" type="email" id="email" required/>
                </b-form-group>
                <b-form-group
                  label="Country / Region"
                  label-for="country">
                  <b-form-input class="join__input" type="text" id="country" required/>
                </b-form-group>
                <b-form-group
                  label="City"
                  label-for="city">
                  <b-form-input class="join__input" type="text" id="city" required/>
                </b-form-group>
                <b-form-group
                  label="Password"
                  label-for="password">
                  <b-form-input class="join__input" type="password" id="password" required/>
                  <span>Password must be between 8 and 35 characters long. (Special characters are permitted.)</span>
                </b-form-group>
                <b-button type="submit">JOIN</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
