(function(){
  const addressInput = document.getElementById('addressInput');
  const searchBox = document.getElementById('searchBox');
  const searchBtn = document.getElementById('searchBtn');
  const newTabBtn = document.getElementById('newTabBtn');
  const tabs = document.getElementById('tabs');
  const newtabSection = document.getElementById('newtab');
  const pageView = document.getElementById('pageView');
  const contentFrame = document.getElementById('contentFrame');
  const shieldsBtn = document.getElementById('shieldsBtn');
  const shieldsPanel = document.getElementById('shieldsPanel');
  const blockAds = document.getElementById('blockAds');
  const blockScripts = document.getElementById('blockScripts');

  function isProbablyURL(text){
    // simple heuristic: contains a dot and no spaces -> treat as URL
    return /\S+\.\S+/.test(text) && !/\s/.test(text);
  }

  function navigateTo(text){
    if(!text) return;
    let url = text.trim();
    if(!/^https?:\/\//i.test(url)){
      if(isProbablyURL(url)) url = 'https://' + url;
      else url = 'https://duckduckgo.com/?q=' + encodeURIComponent(url);
    }
    openInFrame(url);
  }

  function openInFrame(url){
    // show page view and set iframe src
    newtabSection.classList.add('hidden');
    pageView.classList.remove('hidden');
    contentFrame.src = url;
  }

  addressInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      navigateTo(addressInput.value);
    }
  });

  searchBox.addEventListener('keydown', function(e){
    if(e.key === 'Enter') searchBtn.click();
  });

  searchBtn.addEventListener('click', function(){
    navigateTo(searchBox.value);
  });

  newTabBtn.addEventListener('click', function(){
    // create a new tab visually and switch to it (simple)
    const t = document.createElement('div');
    t.className = 'tab active';
    t.textContent = 'New Tab';
    // deactivate existing tabs
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    tabs.insertBefore(t, newTabBtn);
    // show newtab content
    pageView.classList.add('hidden');
    newtabSection.classList.remove('hidden');
  });

  // simple click delegation for tabs to show newtab or load example
  tabs.addEventListener('click', function(e){
    if(e.target.classList.contains('tab')){
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
      e.target.classList.add('active');
      if(e.target.textContent === 'New Tab'){
        pageView.classList.add('hidden');
        newtabSection.classList.remove('hidden');
      } else {
        navigateTo('https://' + e.target.textContent);
      }
    }
  });

  shieldsBtn.addEventListener('click', function(){
    shieldsPanel.classList.toggle('hidden');
  });

  // visual indicator for shields based on blockAds state
  function updateShieldsIcon(){
    shieldsBtn.textContent = blockAds.checked ? '🛡️' : '⚪';
  }
  blockAds.addEventListener('change', updateShieldsIcon);
  updateShieldsIcon();

  // Back/Forward not implemented fully — simple history simulation
  const backBtn = document.getElementById('backBtn');
  const forwardBtn = document.getElementById('forwardBtn');
  const historyStack = [];
  let historyIndex = -1;

  function pushHistory(url){
    // truncate forward history
    historyStack.splice(historyIndex+1);
    historyStack.push(url);
    historyIndex = historyStack.length - 1;
  }

  contentFrame.addEventListener('load', function(){
    try{ // some frames (cross-origin) won't allow reading location — we simply push url from src
      const src = contentFrame.src;
      if(src && src !== 'about:blank') pushHistory(src);
    }catch(e){}
  });

  backBtn.addEventListener('click', function(){
    if(historyIndex > 0){
      historyIndex--; contentFrame.src = historyStack[historyIndex];
    }
  });
  forwardBtn.addEventListener('click', function(){
    if(historyIndex < historyStack.length - 1){
      historyIndex++; contentFrame.src = historyStack[historyIndex];
    }
  });

  // quick links open in new tab (real browser tab)
  document.querySelectorAll('.quick-links a').forEach(a=>{
    a.addEventListener('click', function(e){
      // allow default (open) but also mark a tab
      const host = new URL(a.href).host.replace('www.','');
      const t = document.createElement('div');
      t.className = 'tab';
      t.textContent = host;
      tabs.insertBefore(t, newTabBtn);
    });
  });

})();