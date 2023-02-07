<template>
  <div class="p-4 bg-black">
    <nav class="container mx-auto c-navigation">
      <ul class="w-8/12 flex gap-x-4">
        <li>
          <RouterLink to="/" class="text-white">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/projecten" class="text-white">
            Projecten
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/packages" class="text-white">
            Packages
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/over-mij" class="text-white">
            Over mij
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="text-white">
            Contact
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>