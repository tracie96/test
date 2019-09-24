<template>
  <div>
    <md-chips v-model="projects" :md-limit="3" md-placeholder="Add Region...">
      <template slot="md-chip" slot-scope="{ chip }">
        {{ chip }} <small v-if="chip === currentProject">(Marcos Moura)</small>
      </template>

      <div class="md-helper-text">Up to 3 Regions</div>
    </md-chips>
  </div>
</template>

<script>
export default {
  name: "ChipCustomTemplate",
  data: () => ({
    currentProject: "Vue Material",
    projects: ["Lagos", "Edo"]
  })
};
</script>

<style lang="scss">
small {
  font-weight: 500;
}
.md-chip,
.md-deletable {
  background: #d9d9d9 !important;
}
.md-field {
  background: #fff !important;
  border: 1px solid #979797 !important;
  border-radius: 3px !important;
  padding: 7px 5px 4px 5px !important;
}
</style>
