<template>
  <Header></Header>
  <img class="wallpaper" :src="wallpaperImage">
  <img class="icon" :src="iconImage">

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5">
      <input class="form-control" type="text" v-model="nameUniversity" placeholder="Nome dell'università">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5">
      <input class="form-control" type="text" v-model="city" placeholder="Città">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5">
      <input class="form-control" type="text" v-model="country" placeholder="Stato">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5">
      <textarea class="form-control" v-model="plot" id="exampleFormControlTextarea1" rows="3" placeholder="Descrizione"></textarea>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5">
      <label>Periodo: </label>
      <div class="form-check form-check-inline m-lg-3">
        <input class="form-check-input" v-model="period" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">6 mesi</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="period" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">12 mesi</label>
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5">
      <label for="formFile" class="form-label">Logo:</label>
      <input class="form-control"  type="file" id="iconFile" @change="onIconChange">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5">
      <label for="formFile" class="form-label">Immagine di copertina:</label>
      <input class="form-control"  type="file" id="wallpaperFile" @change="onWallpaperChange">
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5 form-group">
      <label for="exampleFormControlSelect1">Ambito di studi:</label>
      <select class="form-control" v-model="field" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  </div>

  <div class="row d-flex justify-content-center">
    <div class="mb-3 col-5">
      <label for="formFile" class="form-label">Posti disponibili:</label>
      <input class="form-control"  type="number"  id="placesValue" v-model="places">
    </div>
  </div>
  <button class="mb-5" @click="this.addOffer()">Aggiungi</button>
</template>

<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
import axios from "axios";

export default defineComponent({
  name: "AddOfferPage",
  components: {Header},
  data(){
    return{
      wallpaperImage: "src/assets/img/placeholder.png",
      iconImage: "src/assets/img/placeholder.png",
      nameUniversity: "",
      city: "",
      country: "",
      latitude: 0,
      longitude: 0,
      period: "",
      places: "",
      field: "",
      logo: "",
      wallpaper: "",
      cardImg: "",
      plot: "",

    }
  },
  methods:{
    onWallpaperChange(e){
      if (! e.target.files.length) return;

      let file = e.target.files[0];

      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = e => {
        this.wallpaperImage = e.target.result;
      };

      const myArray = document.getElementById("wallpaperFile").value.split("\\");
      this.wallpaper = "./../../assets/img/universityWallpapers/" + myArray[2];
    },
    onIconChange(e){
      if (! e.target.files.length) return;

      let file = e.target.files[0];

      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = e => {
        this.iconImage = e.target.result;
      };

      const myArray = document.getElementById("iconFile").value.split("\\");
      this.logo = "./../../assets/img/universityLogos/" + myArray[2];

    },
    addOffer(){
      const json = {name:this.nameUniversity,
        city:this.city,
        country:this.country,
        latitude:this.latitude,
        longitude:this.longitude,
        offer:{
          period:this.period,
          places:document.getElementById("placesValue").value,
          field:this.field
        },
        logo: this.logo,
        wallpaper:this.wallpaper,
        cardImg:this.cardImg,
        plot:this.plot
      };
      axios.post('http://localhost:3000/addoffer', json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });

    }
  }
});
</script>

<style scoped>
.wallpaper{
  width: 100%;
  height: 540px;
  border: 1px solid #000000;
}
.icon{
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: 100px;
  border: 1px solid #000000;
}
</style>