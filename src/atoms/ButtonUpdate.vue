<template>
  <span
    class="button-update"
    @click.stop="clickActive"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2192_39137)">
        <path
          d="M6.25012 17.4997V2.13165L9.55621 5.43774L10.4374 4.55653L6.06263 0.181749C5.81886 -0.060583 5.4252 -0.060583 5.18143 0.181749L0.806641 4.55653L1.6941 5.44399L5.00018 2.13165V17.4997C5.00018 18.3621 5.62515 19.9995 8.12503 19.9995H9.99994V18.7496H8.12503C6.37512 18.7496 6.25012 17.6996 6.25012 17.4997Z"
          fill="black"
        />
        <path
          d="M18.3058 14.5565L14.9997 17.8689V2.50085C14.9997 1.6384 14.3748 0.000976562 11.8749 0.000976562H9.99998V1.25092H11.8749C13.6248 1.25092 13.7498 2.30086 13.7498 2.50085V17.8689L10.4437 14.5628L9.5625 15.444L13.9373 19.8188C14.1811 20.0611 14.5747 20.0611 14.8185 19.8188L19.1933 15.444L18.3058 14.5565Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_2192_39137">
          <rect
            width="20"
            height="20"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  </span>
</template>

<script>

export default {
  name: 'ButtonUpdate',
  methods: {
    clickActive() {
      this.$emit('clickButton');
    },
  },
};
</script>
<style lang="scss">
</style>
