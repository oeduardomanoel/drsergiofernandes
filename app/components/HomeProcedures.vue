<template>
  <section id="procedimentos" class="section procedures" aria-labelledby="proc-title">
    <div class="container">
      <div class="procedures__head">
        <h2 id="proc-title" v-reveal class="h2">Procedimentos</h2>
        <p v-reveal="100" class="lead">
          Os quatro mais procurados no consultório. Cada página explica indicação, cirurgia e recuperação em linguagem simples.
        </p>
      </div>
      <ProcedureList />
    </div>
  </section>
</template>

<style scoped>
.procedures__head {
  display: grid;
  gap: var(--space-4);
  margin-bottom: var(--spacing-section-head);
}

@media (min-width: 900px) {
  .procedures__head {
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: var(--space-8);
  }

  .procedures__head .lead {
    justify-self: end;
    max-width: 44ch;
  }
}
</style>
