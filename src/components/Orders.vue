<template>
  <div id="orders">
    <div id="left-panel">
      <div id="list-companies">
        <h3>Компанії:</h3>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
    <div id="right-panel">
      <div class="title">
        <h2>Послуги:</h2>
      </div>
      <div id="list-orders">
        <div class="title">        
          <h3>Рік</h3>
        </div>
        <table>
          <caption>Місяць</caption>
          <thead>
            <tr>
              <th colspan="2">Покази</th>
              <th colspan="2">Рахунок</th>
              <th rowspan="2">Платіжна система</th>
            </tr>
            <tr>
              <th>Реальні</th>
              <th>Передані</th>
              <th>створено</th>
              <th>проплачено</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'Orders',
  props: {
    year: "",
    services: [],
    companies: [],
    orders: []
  }
}

</script>

<style></style>