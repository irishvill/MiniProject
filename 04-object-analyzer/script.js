// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// Start coding here...
const enabledSettingsList = Object.entries(settings)
      .filter(([key, value]) => value)
      .map(([key, value]) => `${key}: ${value}`);
    document.getElementById("enabledList").innerHTML = enabledSettingsList.join("<br>");

    // 2. Count of true settings
    const enabledCount = enabledSettingsList.length;
    document.getElementById("enabledCount").innerText = enabledCount;

    // 3. Convert to array and filter where value === true
    const filteredArray = Object.entries(settings).filter(([_, value]) => value);
    document.getElementById("filteredArray").innerText = JSON.stringify(filteredArray, null, 2);

    // 4. Rebuild filtered settings object
    const rebuiltObject = Object.fromEntries(filteredArray);
    document.getElementById("rebuiltObject").innerText = JSON.stringify(rebuiltObject, null, 2);