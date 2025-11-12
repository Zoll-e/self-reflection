<script>
</script>

<section >
  <slot />
</section>

<style>
  section {
    width: 100vw;
    min-height: 100vh;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20preserveAspectRatio%3D%22none%22%3E%20%3Cstyle%3E%20line%20%7B%20stroke-linecap%3A%20square%3B%20stroke-width%3A%202.01px%3B%20stroke%3A%20rgba(255,87,238,0.071)%3B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%20%3C%2Fstyle%3E%20%3Cline%20x1%3D%22256%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%22256%22%20%2F%3E%20%3Cline%20x1%3D%22256%22%20y1%3D%22512%22%20x2%3D%22512%22%20y2%3D%22256%22%20%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(135deg, #284269 0%, #732e4e 100%);
    background-size: cover;
    background-attachment: fixed;
    position: relative;
  }
  
  section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(255, 87, 238, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(40, 66, 105, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }
</style>
