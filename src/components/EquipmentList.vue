<template>
  <ul>
    <li v-for="equipment in equipments" :key="equipment.id">{{ equipment.name }}</li>
  </ul>
</template>

<script>
let equipmentEndpoint = 'http://symfony-fitness.docksal.site/api/equipment.json';

export default {
  data() {
    return {
      equipments: []
    }
  },
  methods: {
    loadEquipment() {
      fetch(equipmentEndpoint)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          this.equipments = data;
        });
    }
  },
  mounted() {
    this.loadEquipment();
  }
}
</script>
