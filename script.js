   const generateParlayButton = document.getElementById('generate-parlay');
    const parlayOutput = document.getElementById('parlay-output');
    const legsInput = document.getElementById('legs');
    const marketsSelect = document.getElementById('markets');
    const dateSelect = document.getElementById('date');
    const oddsFormatSelect = document.getElementById('odds-format');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    const upcomingGames = {
      '2024-08-29': [
        { homeTeam: 'Tigers', awayTeam: 'Angels', time: '1:10 p.m.' },
        { homeTeam: 'White Sox', awayTeam: 'Rangers', time: '2:10 p.m.' },
        { homeTeam: 'Rockies', awayTeam: 'Marlins', time: '3:10 p.m.' },
        { homeTeam: 'Reds', awayTeam: 'Athletics', time: '4:10 p.m.' },
        { homeTeam: 'Red Sox', awayTeam: 'Blue Jays', time: '7:10 p.m.' },
        { homeTeam: 'Dodgers', awayTeam: 'Orioles', time: '10:10 p.m.' },
        { homeTeam: 'Brewers', awayTeam: 'Giants', time: '2:10 p.m.' },
        { homeTeam: 'Cardinals', awayTeam: 'Padres', time: '2:15 p.m.' },
        { homeTeam: 'Diamondbacks', awayTeam: 'Mets', time: '3:40 p.m.' },
        { homeTeam: 'Phillies', awayTeam: 'Braves', time: '6:40 p.m.' },
        { homeTeam: 'Astros', awayTeam: 'Royals', time: '8:10 p.m.' }
      ],
      '2024-08-30': [
        { homeTeam: 'Reds', awayTeam: 'Brewers', time: '12:40 p.m.' },
        { homeTeam: 'Phillies', awayTeam: 'Braves', time: '6:45 p.m.' },
        { homeTeam: 'Nationals', awayTeam: 'Cubs', time: '6:45 p.m.' },
        { homeTeam: 'Yankees', awayTeam: 'Cardinals', time: '7:05 p.m.' },
        { homeTeam: 'Rangers', awayTeam: 'Athletics', time: '8:05 p.m.' },
        { homeTeam: 'White Sox', awayTeam: 'Mets', time: '8:10 p.m.' },
        { homeTeam: 'Twins', awayTeam: 'Blue Jays', time: '8:10 p.m.' },
        { homeTeam: 'Rockies', awayTeam: 'Orioles', time: '8:40 p.m.' },
        { homeTeam: 'Angels', awayTeam: 'Mariners', time: '9:38 p.m.' },
        { homeTeam: 'Giants', awayTeam: 'Marlins', time: '10:15 p.m.' },
        { homeTeam: 'Tigers', awayTeam: 'Red Sox', time: '6:40 p.m.' },
        { homeTeam: 'Rays', awayTeam: 'Padres', time: '6:50 p.m.' }
      ],
      '2024-08-31': [
      { homeTeam: 'Yankees', awayTeam: 'Cardinals', time: '1:05 p.m.' },
        { homeTeam: 'Rays', awayTeam: 'Padres', time: '4:10 p.m.' },
        { homeTeam: 'Tigers', awayTeam: 'Red Sox', time: '6:10 p.m.' },
        { homeTeam: 'Rangers', awayTeam: 'Athletics', time: '7:05 p.m.' },
        { homeTeam: 'White Sox', awayTeam: 'Mets', time: '7:10 p.m.' },
        { homeTeam: 'Twins', awayTeam: 'Blue Jays', time: '7:10 p.m.' },
        { homeTeam: 'Phillies', awayTeam: 'Braves', time: '7:15 p.m.' },
        { homeTeam: 'Brewers', awayTeam: 'Reds', time: '7:15 p.m.' },
        { homeTeam: 'Rockies', awayTeam: 'Orioles', time: '8:10 p.m.' },
        { homeTeam: 'Diamondbacks', awayTeam: 'Dodgers', time: '8:10 p.m.' },
        { homeTeam: 'Giants', awayTeam: 'Marlins', time: '9:05 p.m.' },
        { homeTeam: 'Nationals', awayTeam: 'Cubs', time: '4:05 p.m.' },
        { homeTeam: 'Guardians', awayTeam: 'Pirates', time: '6:10 p.m.' }
      ],
      '2024-09-01': [
        { homeTeam: 'Reds', awayTeam: 'Brewers', time: '12:10 p.m.' },
        { homeTeam: 'Nationals', awayTeam: 'Cubs', time: '1:35 p.m.' },
        { homeTeam: 'Rays', awayTeam: 'Padres', time: '1:40 p.m.' },
        { homeTeam: 'Tigers', awayTeam: 'Red Sox', time: '1:40 p.m.' },
        { homeTeam: 'Guardians', awayTeam: 'Pirates', time: '1:40 p.m.' },
        { homeTeam: 'White Sox', awayTeam: 'Mets', time: '2:10 p.m.' },
        { homeTeam: 'Twins', awayTeam: 'Blue Jays', time: '2:10 p.m.' },
        { homeTeam: 'Rangers', awayTeam: 'Athletics', time: '2:35 p.m.' },
        { homeTeam: 'Rockies', awayTeam: 'Orioles', time: '3:10 p.m.' },
        { homeTeam: 'Giants', awayTeam: 'Marlins', time: '4:05 p.m.' },
        { homeTeam: 'Angels', awayTeam: 'Mariners', time: '4:07 p.m.' },
        { homeTeam: 'Diamondbacks', awayTeam: 'Dodgers', time: '4:10 p.m.' },
        { homeTeam: 'Phillies', awayTeam: 'Braves', time: '7:10 p.m.' },
        { homeTeam: 'Yankees', awayTeam: 'Cardinals', time: '7:10 p.m.' }
      ],
      '2024-09-02': [
        { homeTeam: 'Brewers', awayTeam: 'Cardinals', time: '2:10 p.m.' },
        { homeTeam: 'Royals', awayTeam: 'Guardians', time: '4:10 p.m.' },
        { homeTeam: 'Reds', awayTeam: 'Astros', time: '4:10 p.m.' },
        { homeTeam: 'Diamondbacks', awayTeam: 'Dodgers', time: '4:10 p.m.' },
        { homeTeam: 'Padres', awayTeam: 'Tigers', time: '6:40 p.m.' },
        { homeTeam: 'Rays', awayTeam: 'Twins', time: '6:50 p.m.' },
        { homeTeam: 'Athletics', awayTeam: 'Mariners', time: '7:07 p.m.' },
        { homeTeam: 'Pirates', awayTeam: 'Cubs', time: '7:05 p.m.' },
        { homeTeam: 'Rangers', awayTeam: 'Yankees', time: '8:05 p.m.' },
        { homeTeam: 'Mets', awayTeam: 'Red Sox', time: '8:10 p.m.' },
        { homeTeam: 'Orioles', awayTeam: 'White Sox', time: '9:05 p.m.' }
      ]
    };

    const markets = {
      moneyline: {name: 'Moneyline', picks: ['Home Win', 'Away Win']},
      runline: {name: 'Run Line', picks: ['Home -1.5', 'Away +1.5']},
      total: {name: 'Total Runs (Over/Under)', picks: ['Over {total}', 'Under {total}']},
      team_total: {name: 'Team Total Runs', picks: ['Home Over {total}', 'Home Under {total}', 'Away Over {total}', 'Away Under {total}']},
      first_5_innings: {name: 'First 5 Innings (Moneyline)', picks: ['Home Win', 'Away Win', 'Tie']},
      first_5_innings_total: {name: 'First 5 Innings Total', picks: ['Over {total}', 'Under {total}']},
      first_inning: {name: 'First Inning Result', picks: ['Home Score', 'Away Score', 'No Score']},
      alt_runline: {name: 'Alternate Run Line', picks: ['Home -2.5', 'Away +2.5', 'Home +2.5', 'Away -2.5']},
      player_hits: {name: 'Player Total Hits', picks: ['{player} Over {total}', '{player} Under {total}']},
      player_runs: {name: 'Player Total Runs', picks: ['{player} Over {total}', '{player} Under {total}']},
      player_rbis: {name: 'Player Total RBIs', picks: ['{player} Over {total}', '{player} Under {total}']},
      player_strikeouts: {name: 'Pitcher Total Strikeouts', picks: ['{player} Over {total}', '{player} Under {total}']},
      player_home_runs: {name: 'Player to Hit Home Run', picks: ['{player} Yes', '{player} No']},
      extra_innings: {name: 'Game to Go to Extra Innings', picks: ['Yes', 'No']},
      win_margin: {name: 'Win Margin', picks: ['Home by 1-2', 'Home by 3+', 'Away by 1-2', 'Away by 3+']}
    };

    const activePlayers = {
  'Angels': ['Mike Trout', 'Shohei Ohtani', 'Anthony Rendon', 'Jared Walsh', 'David Fletcher'],
  'Athletics': ['Matt Olson', 'Matt Chapman', 'Ramon Laureano', 'Sean Murphy', 'Mark Canha'],
  'Astros': ['Jose Altuve', 'Alex Bregman', 'Yordan Alvarez', 'Carlos Correa', 'Kyle Tucker'],
  'Blue Jays': ['Vladimir Guerrero Jr.', 'Bo Bichette', 'George Springer', 'Teoscar Hernández', 'Cavan Biggio'],
  'Braves': ['Ronald Acuña Jr.', 'Freddie Freeman', 'Ozzie Albies', 'Dansby Swanson', 'Austin Riley'],
  'Brewers': ['Christian Yelich', 'Lorenzo Cain', 'Kolten Wong', 'Willy Adames', 'Omar Narváez'],
  'Cardinals': ['Nolan Arenado', 'Paul Goldschmidt', 'Yadier Molina', 'Tommy Edman', 'Dylan Carlson'],
  'Cubs': ['Kris Bryant', 'Anthony Rizzo', 'Javier Báez', 'Willson Contreras', 'Ian Happ'],
  'Diamondbacks': ['Ketel Marte', 'Eduardo Escobar', 'Carson Kelly', 'David Peralta', 'Josh Rojas'],
  'Dodgers': ['Mookie Betts', 'Cody Bellinger', 'Corey Seager', 'Max Muncy', 'Justin Turner'],
  'Giants': ['Buster Posey', 'Brandon Crawford', 'Mike Yastrzemski', 'Evan Longoria', 'Brandon Belt'],
  'Guardians': ['José Ramírez', 'Franmil Reyes', 'Eddie Rosario', 'Cesar Hernandez', 'Amed Rosario'],
  'Mariners': ['Kyle Seager', 'Mitch Haniger', 'Ty France', 'J.P. Crawford', 'Dylan Moore'],
  'Marlins': ['Starling Marte', 'Jazz Chisholm Jr.', 'Jesús Aguilar', 'Miguel Rojas', 'Brian Anderson'],
  'Mets': ['Francisco Lindor', 'Pete Alonso', 'Michael Conforto', 'Jeff McNeil', 'Dominic Smith'],
  'Nationals': ['Juan Soto', 'Trea Turner', 'Josh Bell', 'Kyle Schwarber', 'Starlin Castro'],
  'Orioles': ['Cedric Mullins', 'Trey Mancini', 'Ryan Mountcastle', 'Anthony Santander', 'Freddy Galvis'],
  'Padres': ['Fernando Tatis Jr.', 'Manny Machado', 'Eric Hosmer', 'Wil Myers', 'Jake Cronenworth'],
  'Phillies': ['Bryce Harper', 'J.T. Realmuto', 'Rhys Hoskins', 'Didi Gregorius', 'Jean Segura'],
  'Pirates': ['Bryan Hayes', 'Bryan Reynolds', 'Colin Moran', 'Adam Frazier', 'Gregory Polanco'],
  'Rangers': ['Joey Gallo', 'Isiah Kiner-Falefa', 'Nate Lowe', 'Nick Solak', 'Adolis García'],
  'Rays': ['Brandon Lowe', 'Austin Meadows', 'Randy Arozarena', 'Willy Adames', 'Mike Zunino'],
  'Red Sox': ['Xander Bogaerts', 'Rafael Devers', 'J.D. Martinez', 'Alex Verdugo', 'Kiké Hernández'],
  'Reds': ['Nick Castellanos', 'Jesse Winker', 'Eugenio Suárez', 'Joey Votto', 'Mike Moustakas'],
  'Rockies': ['Trevor Story', 'Charlie Blackmon', 'C.J. Cron', 'Ryan McMahon', 'Raimel Tapia'],
  'Royals': ['Whit Merrifield', 'Salvador Perez', 'Carlos Santana', 'Andrew Benintendi', 'Jorge Soler'],
  'Tigers': ['Miguel Cabrera', 'Jonathan Schoop', 'Robbie Grossman', 'Jeimer Candelario', 'Niko Goodrum'],
  'Twins': ['Nelson Cruz', 'Josh Donaldson', 'Max Kepler', 'Jorge Polanco', 'Miguel Sanó'],
  'White Sox': ['José Abreu', 'Tim Anderson', 'Yoán Moncada', 'Yasmani Grandal', 'Luis Robert'],
  'Yankees': ['Aaron Judge', 'Giancarlo Stanton', 'DJ LeMahieu', 'Gleyber Torres', 'Luke Voit']
};

    function getRandomGame(date) {
      const games = upcomingGames[date];
      if (!games || games.length === 0) {
        throw new Error(`No games available for ${date}`);
      }
      return games[Math.floor(Math.random() * games.length)];
    }

    function getRandomMarket() {
      const selectedMarket = marketsSelect.value;
      if (selectedMarket === 'all') {
        const marketKeys = Object.keys(markets);
        return markets[marketKeys[Math.floor(Math.random() * marketKeys.length)]];
      }
      return markets[selectedMarket];
    }

    function getRandomPick(market, game) {
  let pick = market.picks[Math.floor(Math.random() * market.picks.length)];
  
  if (pick.includes('{total}')) {
    pick = pick.replace('{total}', Math.floor(Math.random() * 5) + 5);
  }
  if (pick.includes('{player}')) {
    if (market.name.includes('Pitcher')) {
      pick = pick.replace('{player}', getRandomPitcher(game));
    } else {
      pick = pick.replace('{player}', getRandomPlayer(game));
    }
  }
  
  return pick;
}

    function getRandomPlayer(game) {
  const teams = [game.homeTeam, game.awayTeam];
  const team = teams[Math.floor(Math.random() * teams.length)];
  const players = activePlayers[team];
  return players[Math.floor(Math.random() * players.length)];
}

function getRandomPitcher(game) {
  const teams = [game.homeTeam, game.awayTeam];
  const team = teams[Math.floor(Math.random() * teams.length)];
  // For simplicity, we'll use the first player in the list as the pitcher
  return activePlayers[team][0];
}

    function generateRandomOdds() {
      const baseOdds = Math.floor(Math.random() * 500) + 100;
      return Math.random() < 0.5 ? baseOdds : -baseOdds;
    }

    function convertOdds(americanOdds, format) {
      if (format === 'american') return americanOdds;
      if (format === 'decimal') {
        return americanOdds > 0 
          ? (americanOdds / 100 + 1).toFixed(2) 
          : (100 / -americanOdds + 1).toFixed(2);
      }
    }

    generateParlayButton.addEventListener('click', () => {
      try {
        const legs = parseInt(legsInput.value);
        if (isNaN(legs) || legs < 1 || legs > 5) {
          throw new Error('Please enter a valid number of legs between 1 and 5.');
        }

        const selectedDate = dateSelect.value;
        let parlayHtml = '<h3 class="text-2xl font-bold mb-6">Your Generated Parlay</h3>';
        let usedGames = new Set();

        for (let i = 1; i <= legs; i++) {
          let game, market, pick;
          do {
            game = getRandomGame(selectedDate);
          } while (usedGames.has(JSON.stringify(game)));
          usedGames.add(JSON.stringify(game));

          market = getRandomMarket();
          pick = getRandomPick(market, game);
          const odds = generateRandomOdds();
          const formattedOdds = convertOdds(odds, oddsFormatSelect.value);

          parlayHtml += `
            <div class="mb-6 p-6 bg-gray-800 rounded-xl fade-in">
              <h4 class="text-xl font-semibold mb-3">Leg ${i}</h4>
              <p class="mb-2"><i class="ph-duotone ph-baseball-fill mr-2"></i>${game.awayTeam} @ ${game.homeTeam} (${game.time})</p>
              <p class="mb-2"><i class="ph-duotone ph-chart-pie-slice-fill mr-2"></i>${market.name}</p>
              <p class="highlight-pick"><i class="ph-duotone ph-check-circle-fill mr-2"></i>${pick}</p>
              <p class="mt-3 text-xl"><i class="ph-duotone ph-currency-dollar-fill mr-2"></i>Odds: ${formattedOdds}</p>
            </div>
          `;
        }

        parlayOutput.innerHTML = parlayHtml;
      } catch (error) {
        parlayOutput.innerHTML = `<p class="text-red-500 text-center">${error.message}</p>`;
      }
    });

    oddsFormatSelect.addEventListener('change', () => {
      const parlayLegs = document.querySelectorAll('#parlay-output > div');
      parlayLegs.forEach(leg => {
        const oddsElement = leg.querySelector('p:last-child');
        if (oddsElement) {
          const americanOdds = parseInt(oddsElement.textContent.split(': ')[1]);
          const formattedOdds = convertOdds(americanOdds, oddsFormatSelect.value);
          oddsElement.textContent = `Odds: ${formattedOdds}`;
        }
      });
    });

    // Theme toggle functionality
    let isDarkMode = true;


    // Mobile menu functionality
    menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });

  // Initialize phosphor icons
  window.addEventListener('load', () => {
    PhosphorIcons.replace();
  });