
function SearchField({
  searchTerm,
  onSearchChange,
  eventType,
  onEventTypeChange,
  onResetSearch
}) {
  return (
    <div className="search-field">
      <label htmlFor="event-search">
        Events durchsuchen
      </label>

      <input
        type="search"
        id="event-search"
        value={searchTerm}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
      />

      <div>
        <label htmlFor="event-type">
          Eventtyp:
        </label>

        <select
          id="event-type"
          value={eventType}
          onChange={(event) =>
            onEventTypeChange(event.target.value)
          }
        >
          <option value="all">Alle</option>
          <option value="online">Online</option>
          <option value="onsite">Vor Ort</option>
        </select>
      </div>

      <button
        type="button"
        onClick={onResetSearch}
      >
        Suche zurücksetzen
      </button>
    </div>
  );
}

export default SearchField;
