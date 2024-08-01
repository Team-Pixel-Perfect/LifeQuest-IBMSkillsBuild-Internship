const Modal = ({
  habitName,
  setHabitName,
  habitGoal,
  setHabitGoal,
  habitFrequency,
  setHabitFrequency,
  habitDays,
  setHabitDays,
  handleGoalChange,
  onSubmit,
  onClose,
  isEditing,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">
          {isEditing ? "Edit Habit" : "Add New Habit"}
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Habit Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Goal (times per day)
            </label>
            <div className="flex items-center">
              <button
                type="button"
                className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 mr-2"
                onClick={() => handleGoalChange(-1)}
              >
                -
              </button>
              <span className="text-xl">{habitGoal}</span>
              <button
                type="button"
                className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 ml-2"
                onClick={() => handleGoalChange(1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Frequency
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={habitFrequency}
              onChange={(e) => {
                setHabitFrequency(e.target.value);
                if (e.target.value === "Daily") {
                  setHabitDays([0, 1, 2, 3, 4, 5, 6]);
                }
              }}
              required
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Days
            </label>
            <div className="grid grid-cols-7 gap-1">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-center text-sm font-medium cursor-pointer ${
                    habitFrequency === "Daily" || habitDays.includes(index)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => {
                    if (habitDays.includes(index)) {
                      setHabitDays(habitDays.filter((day) => day !== index));
                    } else {
                      setHabitDays([...habitDays, index]);
                    }
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {isEditing ? "Save Changes" : "Add Habit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
