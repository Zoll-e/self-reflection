<script lang="ts">
  export let size: string | number = "24";
  export let color: string = "currentColor";
  export let height: string | number = "24";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={height}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>

