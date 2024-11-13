function createCalendar() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const calendarTitle = document.querySelector('.calendar-title');
  calendarTitle.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

  const calendarGrid = document.querySelector('.calendar-grid');

  for (let i = 0; i < firstDayIndex; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('calendar-cell', 'empty-cell');
    calendarGrid.appendChild(emptyCell);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const calendarCell = document.createElement('div');
    calendarCell.classList.add('calendar-cell');
    calendarCell.textContent = i;

    if (i === currentDate.getDate()) {
      calendarCell.classList.add('current-day');
    }

    calendarGrid.appendChild(calendarCell);
  }
}

createCalendar();