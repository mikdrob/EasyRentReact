<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
function modifyTableCell(rowIndex, columnIndex, newText) {
    let table = document.getElementById('table');
    let cell = table.rows[rowIndex].cells[columnIndex];
    let valueBefore = cell.innerHTML;
    cell.innerHTML = newText;
    return valueBefore;
  }
</script>

