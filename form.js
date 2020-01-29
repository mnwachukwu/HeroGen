////////////////////////////////////////////////////////////////
//                                                            //
// HeroGen (an ALTERNITY Character Generator)                 //
// Copyright (c) 1999-2003 Mike Heffner. All rights reserved. //
//                                                            //
// ALTERNITY is a registered trademark owned by TSR, Inc.     //
// Copyright (c) 1998 TSR, Inc. All rights reserved.          //
//                                                            //
////////////////////////////////////////////////////////////////

version = '3.0'

cookies = new Array('info','skills','other','custom')

cookiee = new Array(cookies.length)
info   = 0
skills = 1
other  = 2
custom = 3

files = 3

abilities  = 13
radios     = '|9|'
selections = '|2|3|4|10|11|12|13|14|15|16|17|18|'
checkboxes = '|48|52|'

spec = new Array('Human','Fraal','Mechalus','Sesheyan','T\'sa','Weren','Mutant')

ability = new Array('Strength','Dexterity','Constitution','Intelligence','Will','Personality')
ability_score = new Array(ability.length)
strength     = 0
dexterity    = 1
constitution = 2
intelligence = 3
will         = 4
personality  = 5

free_broad_skill = new Array(spec.length)
free_broad_skill[0] = new Array('s_0_1','s_1_5','s_2_1','s_3_3','s_4_2','s_5_3')
free_broad_skill[1] = new Array('s_1_5','s_3_3','s_4_2','s_4_5','s_5_3','');       // last skill is Telepathy
free_broad_skill[2] = new Array('s_0_1','s_1_5','s_2_1','s_3_1','s_3_3','s_4_2')
free_broad_skill[3] = new Array('s_0_3','s_1_0','s_2_1','s_3_3','s_4_2','s_5_3')
free_broad_skill[4] = new Array('s_0_1','s_1_1','s_2_1','s_3_3','s_4_2','s_5_3')
free_broad_skill[5] = new Array('s_0_1','s_0_4','s_2_1','s_3_3','s_4_2','s_5_3')
free_broad_skill[6] = new Array('s_0_1','s_1_5','s_2_1','s_3_3','s_4_2','s_5_3')

broad_skills = 0 // number of broad skills allowed to be purchased
broad_skills_selected = 0
skill_points_spent = 0
skill_points_available = 0

broad = new Array(ability.length)

broad[0] = new Array('Armor Operation|7|C','Athletics|3|-','Heavy Weapons|6|C','Melee Weapons|6|C','Unarmed Attack|5|-')
broad[1] = new Array('Acrobatics|7|F','Manipulation|6|-','Ranged Weapons, Mod.|6|C','Ranged Weapons, Prim.|7|C','Stealth|7|F','Vehicle Operation|3|-')
broad[2] = new Array('Movement|3|-','Stamina|3|-','Survival|5|CF')
broad[3] = new Array('Business|4|D','Computer Science|7|T','Demolitions|6|CT','Knowledge|3|-','Law|5|DF','Life Science|7|T','Medical Science|7|T','Navigation|6|T','Physical Science|7|T','Security|5|CF','System Operation|4|-','Tactics|6|CT','Technical Science|7|T')
broad[4] = new Array('Administration|4|D','Animal Handling|3|-','Awareness|3|-','Creativity|4|-','Investigate|7|FT','Resolve|5|-','Street Smart|5|F','Teach|5|DT')
broad[5] = new Array('Culture|5|D','Deception|5|DF','Entertainment|4|DF','Interaction|3|-','Leadership|4|-')

skill = new Array(ability.length)
// Strength
skill[0] = new Array(5)
skill[0][0] = new Array('Combat armor|u|3|C','Powered armor|t|4|C')
skill[0][1] = new Array('Climb|u|2|-','Jump|u|1|-','Throw|u|2|-','[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-')
skill[0][2] = new Array('Direct fire|u|4|C','Indirect fire|u|4|C')
skill[0][3] = new Array('Blade|u|3|C','Bludgeon|u|3|C','Powered weapon|u|4|C')
skill[0][4] = new Array('Brawl|u|3|C','Power martial arts|t|5|CF')
// Dexterity
skill[1] = new Array(6)
skill[1][0] = new Array('Daredevil|u|4|-','Defensive martial arts|t|5|CF','Dodge|u|4|CF','Fall|u|3|F','Flight|u|2|-','Zero-g training|t|2|CT','[specific]|t|1|-','[specific]|t|1|-','[specific]|t|1|-','[specific]|t|1|-','[specific]|t|1|-')
skill[1][1] = new Array('Lockpick|u|4|F','Pickpocket|u|4|F','Prestidigitation|u|3|D')
skill[1][2] = new Array('Pistol|u|4|C','Rifle|u|4|C','SMG|u|4|C')
skill[1][3] = new Array('Bow|u|4|C','Crossbow|u|3|C','Flintlock|u|3|C','Sling|u|4|C')
skill[1][4] = new Array('Hide|u|4|F','Shadow|u|4|F','Sneak|u|5|F')
skill[1][5] = new Array('Air vehicle: [specific]|t|5|T','Air vehicle: [specific]|t|5|T','Air vehicle: [specific]|t|5|T','Air vehicle: [specific]|t|5|T','Air vehicle: [specific]|t|5|T','Land vehicle: [specific]|u|3|T','Land vehicle: [specific]|u|3|T','Land vehicle: [specific]|u|3|T','Land vehicle: [specific]|u|3|T','Land vehicle: [specific]|u|3|T','Space vehicle: [specific]|t|5|T','Space vehicle: [specific]|t|5|T','Space vehicle: [specific]|t|5|T','Space vehicle: [specific]|t|5|T','Space vehicle: [specific]|t|5|T','Water vehicle: [specific]|u|3|T','Water vehicle: [specific]|u|3|T','Water vehicle: [specific]|u|3|T','Water vehicle: [specific]|u|3|T','Water vehicle: [specific]|u|3|T')
// Constitution
skill[2] = new Array(3)
skill[2][0] = new Array('Race|t|2|-','Swim|t|1|-','Trailblazing|u|3|F')
skill[2][1] = new Array('Endurance|u|4|C','Resist pain|t|4|C')
skill[2][2] = new Array('Survival training|u|3|CF')
// Intelligence
skill[3] = new Array(13)
skill[3][0]  = new Array('Corporate|u|3|D','Illicit business|u|3|DF','Small business|u|3|D')
skill[3][1]  = new Array('Hacking|t|5|T','Hardware|u|4|T','Programming|u|4|T')
skill[3][2]  = new Array('Disarm|u|4|T','Scratch-built|t|4|T','Set explosives|u|3|CT')
skill[3][3]  = new Array('Computer operation|t|1|-','Deduce|u|2|-','First aid|t|2|-','Language: [specific]|t|1|-','Language: [specific]|t|1|-','Language: [specific]|t|1|-','Language: [specific]|t|1|-','Language: [specific]|t|1|-','[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-')
skill[3][4]  = new Array('Court procedures|u|3|D','Law enforcement|u|3|CF','[specific]|t|1|-','[specific]|t|1|-','[specific]|t|1|-','[specific]|t|1|-','[specific]|t|1|-')
skill[3][5]  = new Array('Biology|u|3|T','Botany|u|3|T','Genetics|u|3|T','Xenology|t|4|T','Zoology|u|3|T')
skill[3][6]  = new Array('Forensics|u|3|T','Medical knowledge|u|3|T','Psychology|u|3|T','Surgery|t|5|T','Treatment|t|4|T','Xenomedicine: [specific]|t|3|T','Xenomedicine: [specific]|t|3|T','Xenomedicine: [specific]|t|3|T','Xenomedicine: [specific]|t|3|T','Xenomedicine: [specific]|t|3|T')
skill[3][7]  = new Array('Astrogation, drivespace|u|4|T','Astrogation, system|u|3|T','Navigation, surface|u|3|T')
skill[3][8]  = new Array('Astronomy|u|3|T','Chemistry|u|3|T','Physics|u|3|T','Planetology|u|3|T')
skill[3][9]  = new Array('Protection protocols|u|3|CF','Security devices|u|3|FT')
skill[3][10] = new Array('Communications|u|3|DT','Defenses|u|3|CT','Engineering|u|3|T','Sensors|u|3|FT','Weapons|u|3|CT')
skill[3][11] = new Array('Infantry tactics|u|3|C','Space tactics|u|3|T','Vehicle tactics|u|3|CT')
skill[3][12] = new Array('Invention|u|4|T','Juryrig|u|3|T','Repair|u|3|T','Technical knowledge|u|3|T')
// Will
skill[4] = new Array(8)
skill[4][0] = new Array('Bureaucracy|u|3|D','Management|u|3|D')
skill[4][1] = new Array('Animal riding|u|1|-','Animal training|u|1|-')
skill[4][2] = new Array('Intuition|u|3|-','Perception|u|2|-')
skill[4][3] = new Array('[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-','[specific]|u|1|-')
skill[4][4] = new Array('Interrogate|u|4|CF','Search|u|4|FT','Track|u|4|F')
skill[4][5] = new Array('Mental resolve|u|3|-','Physical resolve|u|3|-')
skill[4][6] = new Array('Criminal elements|u|3|F','Street knowledge|u|3|F')
skill[4][7] = new Array('[specific]|t|3|DT','[specific]|t|3|DT','[specific]|t|3|DT','[specific]|t|3|DT','[specific]|t|3|DT')
// Personality
skill[5] = new Array(5)
skill[5][0] = new Array('Diplomacy|u|3|D','Etiquette: [specific]|t|2|D','Etiquette: [specific]|t|2|D','Etiquette: [specific]|t|2|D','Etiquette: [specific]|t|2|D','Etiquette: [specific]|t|2|D','First encounter|t|3|D')
skill[5][1] = new Array('Bluff|u|3|DF','Bribe|u|3|DF','Gamble|u|3|DF')
skill[5][2] = new Array('Act|u|2|DF','Dance|u|2|DF','Musical Instrument|t|2|DF','Sing|u|2|DF')
skill[5][3] = new Array('Bargain|u|3|DT','Charm|u|3|DF','Interview|u|3|DF','Intimidate|u|3|C','Seduce|u|3|DF','Taunt|u|2|-')
skill[5][4] = new Array('Command|u|4|CD','Inspire|t|4|CD')

combat_movement_rate = new Array(14)
combat_movement_rate[0]  = new Array( 6,  4,  2,  1,  2,  6, 12)
combat_movement_rate[1]  = new Array( 8,  6,  2,  1,  2,  8, 16)
combat_movement_rate[2]  = new Array(10,  6,  2,  1,  2, 10, 20)
combat_movement_rate[3]  = new Array(12,  8,  2,  1,  2, 12, 24)
combat_movement_rate[4]  = new Array(14, 10,  4,  2,  4, 14, 28)
combat_movement_rate[5]  = new Array(16, 10,  4,  2,  4, 16, 32)
combat_movement_rate[6]  = new Array(18, 12,  4,  2,  4, 18, 36)
combat_movement_rate[7]  = new Array(20, 12,  4,  2,  4, 20, 40)
combat_movement_rate[8]  = new Array(22, 14,  4,  2,  4, 22, 44)
combat_movement_rate[9]  = new Array(24, 16,  6,  3,  6, 24, 48)
combat_movement_rate[10] = new Array(26, 16,  6,  3,  6, 26, 52)
combat_movement_rate[11] = new Array(28, 18,  6,  3,  6, 28, 56)
combat_movement_rate[12] = new Array(30, 20,  8,  4,  8, 30, 60)
combat_movement_rate[13] = new Array(32, 22,  8,  4,  8, 32, 64)

professions = 5

profession_requirement = new Array(professions)
profession_requirement[0] = new Array(11,  0,  9,  0,  0,  0)
profession_requirement[1] = new Array( 0,  0,  0,  0,  9, 11)
profession_requirement[2] = new Array( 0, 11,  0,  0,  9,  0)
profession_requirement[3] = new Array( 0,  9,  0, 11,  0,  0)
profession_requirement[4] = new Array( 0,  0,  9,  9, 11,  0)

ability_score_limit = new Array(spec.length)
ability_score_limit[0] = new Array(4, 14, 4, 14, 4, 14, 4, 14, 4, 14, 4, 14)
ability_score_limit[1] = new Array(4, 11, 4, 11, 4, 10, 9, 15, 9, 16, 4, 15)
ability_score_limit[2] = new Array(8, 14, 4, 14, 6, 14, 7, 15, 6, 12, 4, 12)
ability_score_limit[3] = new Array(6, 12, 7, 15, 4, 10, 4, 12, 9, 15, 4, 12)
ability_score_limit[4] = new Array(4, 11, 9, 16, 4, 10, 8, 14, 4, 14, 4, 13)
ability_score_limit[5] = new Array(9, 16, 4, 12, 8, 16, 4, 13, 4, 14, 4, 14)
ability_score_limit[6] = new Array(4, 14, 4, 14, 4, 14, 4, 14, 4, 14, 4, 14)

perk = new Array(22)
perk[0]  = new Array('<i>Alien Artifact</i>',      '8',     '-')
perk[1]  = new Array('Ambidextrous',               '4',     'DEX')
perk[2]  = new Array('Animal Friend',              '4',     'WIL')
perk[3]  = new Array('Celebrity',                  '3',     'PER')
perk[4]  = new Array('Concentration',              '3',     'INT')
perk[5]  = new Array('Danger Sense',               '4',     'WIL')
perk[6]  = new Array('<i>Faith</i>',               '5',     'WIL')
perk[7]  = new Array('<i>Filthy Rich</i>',         '6',     'PER')
perk[8]  = new Array('Fists of Iron',              '2/5',   'STR')
perk[9]  = new Array('Fortitude',                  '4',     'CON')
perk[10] = new Array('<i>Good Luck</i>',           '3',     'WIL')
perk[11] = new Array('<i>Great Looks</i>',         '3',     'PER')
perk[12] = new Array('<i>Heightened Ability</i>', '10',     'Special')
perk[13] = new Array('Observant',                  '3',     'WIL')
perk[14] = new Array('Photo Memory',               '3',     'INT')
perk[15] = new Array('Powerful Ally',              '4',     'PER')
perk[16] = new Array('<i>Psionic Awareness</i>',   '3',     'INT')
perk[17] = new Array('Reflexes',                   '4',     'DEX')
perk[18] = new Array('Reputation',                 '3',     'WIL')
perk[19] = new Array('Tough as Nails',             '4',     'STR')
perk[20] = new Array('<i>Vigor</i>',               '2/3/4', 'CON')
perk[21] = new Array('Willpower',                  '4',     'WIL')

flaw = new Array(20)
flaw[0]  = new Array('Alien Artifact', '5',     '-')
flaw[1]  = new Array('Bad Luck',       '6',     'WIL')
flaw[2]  = new Array('Clueless',       '2/4/6', 'INT')
flaw[3]  = new Array('Clumsy',         '5',     'DEX')
flaw[4]  = new Array('Code of Honor',  '3',     'WIL')
flaw[5]  = new Array('Delicate',       '3',     'STR')
flaw[6]  = new Array('Dirt Poor',      '5',     'PER')
flaw[7]  = new Array('Forgetful',      '5',     'INT')
flaw[8]  = new Array('Fragile',        '3',     'CON')
flaw[9]  = new Array('Infamy',         '2/4/6', 'PER')
flaw[10] = new Array('Oblivious',      '4',     'WIL')
flaw[11] = new Array('Obsessed',       '2/4/6', 'INT')
flaw[12] = new Array('Old Injury',     '2/4/6', 'STR')
flaw[13] = new Array('Phobia',         '2/4/6', 'WIL')
flaw[14] = new Array('Poor Looks',     '3',     'PER')
flaw[15] = new Array('Powerful Enemy', '2/4/6', 'PER')
flaw[16] = new Array('Primitive',      '2/4/6', 'INT')
flaw[17] = new Array('Slow',           '6',     'DEX')
flaw[18] = new Array('Spineless',      '2/4/6', 'WIL')
flaw[19] = new Array('Temper',         '2/4/6', 'WIL')

costanza = new Array(5)
costanza[0] = new Array('p_7',  'f_6');  // Filthy Rich - Dirt Poor
costanza[1] = new Array('p_9',  'f_8');  // Fortitude   - Fragile
costanza[2] = new Array('p_10', 'f_1');  // Good Luck   - Bad Luck
costanza[3] = new Array('p_11', 'f_14'); // Great Looks - Poor Looks
costanza[4] = new Array('p_13', 'f_10'); // Observant   - Oblivious

// Weapon, Skill, Type, Range, Damage, Skill, Acc, Actions, Clip Size, Hide, Mass
weapon = new Array(102)
// Melee Weapons
weapon[0]  = new Array('Club',              's_0_3_1','LI/O','Personal', 'd4+1s/d4w/d4+1w',  'Melee-<i>bludgeon</i>', '0',3, '-','+1','2')
weapon[1]  = new Array('Dagger',            's_0_3_0','LI/O','Personal*','d4w/d4+1w/d4+2w',  'Melee-<i>blade</i>',    '0',4, '-','+3','1')
weapon[2]  = new Array('Quarterstaff',      's_0_3_1','LI/O','Personal', 'd4+1s/d4+3s/d6w',  'Melee-<i>bludgeon</i>','-1',3, '-', '-','2')
weapon[3]  = new Array('Spear',             's_0_3_0','LI/O','Personal*','d4w/d4+2w/d4m',    'Melee-<i>blade</i>',    '0',3, '-', '-','2')
weapon[4]  = new Array('Unarmed',           's_0_4_0','LI/O','Personal', 'd4s/d4+1s/d4+2s',  'Unarmed-<i>brawl</i>',  '0',4, '-', '-','-')
weapon[5]  = new Array('Gauntlet',          's_0_4_0','LI/O','Personal', 'd4+1s/d4+2s/d4-1w','Unarmed-<i>brawl</i>',  '0',4, '-','+3','1')
weapon[6]  = new Array('Hand ax',           's_0_3_0','LI/O','Personal*','d4+1w/d4+2w/d4+3w','Melee-<i>blade</i>',    '0',3, '-','+2','1')
weapon[7]  = new Array('Mace',              's_0_3_1','LI/O','Personal', 'd6+1s/d4+1w/d6+1w','Melee-<i>bludgeon</i>', '0',2, '-','+1','2')
weapon[8]  = new Array('Short sword',       's_0_3_0','LI/O','Personal', 'd4w/d6w/d6+2w',    'Melee-<i>blade</i>',    '0',3, '-','+1','2')
weapon[9]  = new Array('Broad sword',       's_0_3_0','LI/O','Personal', 'd4+2w/d6+2w/d4m',  'Melee-<i>blade</i>',    '0',2, '-', '-','4')
weapon[10] = new Array('Flail',             's_0_3_1','LI/O','Personal', 'd6+2s/d4+2w/d6+2w','Melee-<i>bludgeon</i>','+1',2, '-', '-','4')
weapon[11] = new Array('Great ax',          's_0_3_0','LI/O','Personal', 'd6+1w/d6+2w/d4+1m','Melee-<i>blade</i>',   '+1',2, '-', '-','5')
weapon[12] = new Array('Nunchaku',          's_0_3_1','LI/O','Personal', 'd6s/d6+2s/d8+3s',  'Melee-<i>bludgeon</i>', '0',3, '-','+2','1')
weapon[13] = new Array('Polearm',           's_0_3_0','LI/O','Personal', 'd6+1w/d4+3w/d4+1m','Melee-<i>blade</i>',   '+1',1, '-', '-','5')
weapon[14] = new Array('Cutlass',           's_0_3_0','LI/O','Personal', 'd4+1w/d6+1w/d6+3w','Melee-<i>blade</i>',   '+1',3, '-','+1','3')
weapon[15] = new Array('Katana',            's_0_3_0','LI/O','Personal', 'd4+2w/d6+2w/d4+1m','Melee-<i>blade</i>',   '-1',3, '-','+1','2')
weapon[16] = new Array('Rapier',            's_0_3_0','LI/O','Personal', 'd4w/d4+1w/d4+2w',  'Melee-<i>blade</i>',   '-1',3, '-','+2','1')
weapon[17] = new Array('Saber',             's_0_3_0','LI/O','Personal', 'd4w/d4+2w/2d4+1w', 'Melee-<i>blade</i>',    '0',3, '-','+1','2')
weapon[18] = new Array('Bayonet',           's_0_3_0','LI/O','Personal', 'd4w/d4+2w/d4m',    'Melee-<i>blade</i>',   '+1',3, '-', '-','2')
weapon[19] = new Array('Combat knife',      's_0_3_0','LI/O','Personal*','d4+1w/d4+2w/d4+3w','Melee-<i>blade</i>',    '0',4, '-','+3','1')
weapon[20] = new Array('Stun baton',        's_0_3_2','En/O','Personal', 'd4+1s/d4+3s/d6+4s','Melee-<i>powered</i>',  '0',3,'20','+2','2')
weapon[21] = new Array('Chainsword',        's_0_3_2','LI/O','Personal', 'd8+1w/d8+2w/d4+1m','Melee-<i>powered</i>', '+1',2, '5', '-','5')
weapon[22] = new Array('Pulse baton',       's_0_3_2','En/O','Personal', 'd8s/d4+2w/d6+2w',  'Melee-<i>powered</i>',  '0',3,'10','+2','2')
weapon[23] = new Array('Gravemace',         's_0_3_2','LI/O','Personal', 'd8+2s/d6+2w/d8+2w','Melee-<i>powered</i>',  '0',3,'10','+1','3')
weapon[24] = new Array('Power Cestus',      's_0_4_0','LI/O','Personal', 'd4+2s/d4w/d4+1w',  'Unarmed-<i>brawl</i>',  '0',4,'12','+1','3')
weapon[25] = new Array('Star sword',        's_0_3_2','En/G','Personal', 'd6+1w/2d6w/d4+3m', 'Melee-<i>powered</i>',  '0',3,'10','+2','2')
weapon[26] = new Array('Tri-staff',         's_0_3_2','En/O','Personal', 'd8+2w/3d4+1w/d6m', 'Melee-<i>powered</i>', '-1',3,'12', '-','5')
// Ranged Weapons
weapon[27] = new Array('Bow, short',        's_1_3_0','LI/O','20/40/100',   'd4w/d4+2w/d4+3w',   'Prim-<i>bow</i>',      '+1',3,   '10', '-','1')
weapon[28] = new Array('Sling',             's_1_3_3','LI/O','10/20/60',    'd4s/d4+2s/d4w',     'Prim-<i>sling</i>',    '+1',2,   '10','+2','&lt;1')
weapon[29] = new Array('Javelin',           's_0_1_2','LI/O','Per STR',     'd4w/d4+1w/d4+2w',   'Athl-<i>throw</i>',     '0',1,    '-', '-','1')
weapon[30] = new Array('Bow, long',         's_1_3_0','LI/O','40/80/200',   'd4+1w/d6+1w/d4m',   'Prim-<i>bow</i>',      '+1',2,   '10', '-','1')
weapon[31] = new Array('Crossbow',          's_1_3_1','LI/O','50/100/250',  'd4+2w/d6+2w/d4+1m', 'Prim-<i>crossbow</i>',  '0',1,   '10', '-','2')
weapon[32] = new Array('Shuriken',          's_0_1_2','LI/O','Per STR',     'd4s/d4w/d4+1w',     'Athl-<i>throw</i>',     '0',4,    '-','+4','&lt;1')
weapon[33] = new Array('Musket, flintlock', 's_1_3_2','HI/O','20/40/100',   'd6+1w/d6+3w/d6+1m', 'Prim-<i>flintlock</i>','+2',1,    '1', '-','4')
weapon[34] = new Array('Pistol, flintlock', 's_1_3_2','HI/O','4/8/16',      'd4+2w/d6+2w/d4+1m', 'Prim-<i>flintlock</i>','+2',2,    '1','+2','2')
weapon[35] = new Array('Rifle, long',       's_1_3_2','HI/O','30/60/150',   'd6w/d6+2w/d6m',     'Prim-<i>flintlock</i>','+1',1,    '1', '-','5')
weapon[36] = new Array('Derringer',         's_1_2_0','HI/O','2/6/12',      'd4-1w/d6w/d6+2w',   'Mod-<i>pistol</i>',    '+1',2,    '2','+4','&lt;1')
weapon[37] = new Array('Pistol, .32 rev.',  's_1_2_0','HI/O','4/8/30',      'd4w/d6w/d4m',       'Mod-<i>pistol</i>',    '+1',3,    '6','+3','1')
weapon[38] = new Array('Pistol, .45 rev.',  's_1_2_0','HI/O','4/10/40',     'd4+1w/d4+2w/d6m',   'Mod-<i>pistol</i>',    '+1',3,    '6','+2','1')
weapon[39] = new Array('Rifle, .30 bolt',   's_1_2_1','HI/O','50/100/300',  'd4+2w/d6+2w/d4+1m', 'Mod-<i>rifle</i>',      '0',2,   '10', '-','3')
weapon[40] = new Array('Rifle, .44 lever',  's_1_2_1','HI/O','40/80/240',   'd6w/d8+1w/d6m',     'Mod-<i>rifle</i>',     '+1',2,   '12', '-','3')
weapon[41] = new Array('Shotgun, 12 gauge', 's_1_2_1','HI/O','6/12/30',     'd4w/d6w/d4m',       'Mod-<i>rifle</i>',      '0',2,    '5','+1','3')
weapon[42] = new Array('SMG, .45 cal',      's_1_2_2','HI/O','8/16/40',     'd4+1w/d4+2w/d6m',   'Mod-<i>SMG</i>',       '+2',4,  '-/8', '-','4')
weapon[43] = new Array('Pistol, .38 rev',   's_1_2_0','HI/O','6/12/40',     'd4w/d4+1w/d4m',     'Mod-<i>pistol</i>',     '0',3,    '6','+2','1')
weapon[44] = new Array('Pistol, .44 magnum','s_1_2_0','HI/O','6/12/50',     'd4+2w/d4+3w/d4+2m', 'Mod-<i>pistol</i>',     '0',3,    '6','+1','1')
weapon[45] = new Array('Pistol, 9mm',       's_1_2_0','HI/O','6/12/50',     'd4+1w/d4+2w/d4m',   'Mod-<i>pistol</i>',     '0',4,   '15','+3','1')
weapon[46] = new Array('Rifle, 7.62mm',     's_1_2_1','HI/O','70/140/350',  'd6+1w/2d4+1w/d4+1m','Mod-<i>rifle</i>',      '0',3,   '10', '-','4')
weapon[47] = new Array('Rifle, assault',    's_1_2_1','HI/O','60/120/300',  'd4+2w/d6+3w/d4+1m', 'Mod-<i>rifle</i>',      '0',4,'30/10', '-','3')
weapon[48] = new Array('SMG, 9mm',          's_1_2_2','HI/O','10/20/80',    'd4+1w/d4+2w/d4m',   'Mod-<i>SMG</i>',       '+1',4, '-/10','+1','3')
weapon[49] = new Array('Pistol, 9mm ch',    's_1_2_0','HI/O','8/16/60',     'd4+1w/d6+1w/d4m',   'Mod-<i>pistol</i>',     '0',4,   '15','+3','1')
weapon[50] = new Array('Pistol, 9mm zero-g','s_1_2_0','HI/O','4/10/40',     'd4+1w/d6+1w/d4m',   'Mod-<i>pistol</i>',     '0',2,   '15','+3','1')
weapon[51] = new Array('Pistol, 11mm ch',   's_1_2_0','HI/O','10/20/80',    'd4+2w/d6+2w/d4+1m', 'Mod-<i>pistol</i>',     '0',4,   '10','+2','1')
weapon[52] = new Array('Rifle, 11mm ch',    's_1_2_1','HI/O','80/160/400',  'd6+1w/d6+3w/d6+1m', 'Mod-<i>rifle</i>',      '0',4,'30/10', '-','4')
weapon[53] = new Array('Rifle, 11mm zero-g','s_1_2_1','HI/O','30/60/200',   'd6+1w/d6+3w/d6+1m', 'Mod-<i>rifle</i>',      '0',4,   '15', '-','4')
weapon[54] = new Array('Shotgun, autoflec', 's_1_2_2','HI/O','10/20/40',    'd4w/d6w/d4m',       'Mod-<i>SMG</i>',        '0',4, '15/5','+1','3')
weapon[55] = new Array('SMG, 9mm ch',       's_1_2_2','HI/O','20/40/100',   'd4+1w/d6+1w/d4m',   'Mod-<i>SMG</i>',       '+1',4, '-/10','+1','3')
weapon[56] = new Array('Pistol, 15mm sabot','s_1_2_0','HI/O','10/20/100',   '2d4w/2d4+1w/d4+3m', 'Mod-<i>pistol</i>',     '0',3,    '6','+1','2')
weapon[57] = new Array('Pistol, laser',     's_1_2_0','En/O','20/40/200',   'd4+1w/d6+1w/d4m',   'Mod-<i>pistol</i>',    '-1',4,   '20','+3','1')
weapon[58] = new Array('Pistol, mass',      's_1_2_0','En/G','2/6/12',      'd6w/d6+2w/d6m',     'Mod-<i>pistol</i>',     '0',2,    '4','+2','1')
weapon[59] = new Array('Pistol, stutter',   's_1_2_0','LI/O','6/12/30',     'd6+2s/d8+2s/d8+4s', 'Mod-<i>pistol</i>',     '0',4,   '10','+2','1')
weapon[60] = new Array('Rifle, laser',      's_1_2_1','En/O','100/400/1000','d6+1w/d6+3w/d4+1m', 'Mod-<i>rifle</i>',     '-1',3,   '12', '-','4')
weapon[61] = new Array('Rifle, mass',       's_1_2_1','En/G','4/12/30',     'd6w/d8+1w/d6+1m',   'Mod-<i>rifle</i>',      '0',2,    '4', '-','4')
weapon[62] = new Array('Rifle, quantum',    's_1_2_1','En/O','80/200/500',  'd4+3w/d6+4w/d6+1m', 'Mod-<i>rifle</i>',      '0',3, '15/5', '-','8')
weapon[63] = new Array('Rifle, render',     's_1_2_1','En/O','50/100/250',  'd6+1s/d6+1w/d4+1m', 'Mod-<i>rifle</i>',      '0',3,    '8', '-','4')
weapon[64] = new Array('SMG, laser',        's_1_2_2','En/O','20/80/200',   'd6w/d6+2w/d4m',     'Mod-<i>SMG</i>',        '0',4, '-/10','+1','3')
weapon[65] = new Array('SMG, stutter',      's_1_2_2','LI/O','10/20/80',    'd6+2s/d8+2s/d8+4s', 'Mod-<i>SMG</i>',        '0',4, '-/20','+1','3')
weapon[66] = new Array('Automaser',         's_1_2_2','En/O','20/60/120','d6w/d6+2w/d4m',        'Mod-<i>SMG</i>',       '-1',4, '-/20', '-','3')
weapon[67] = new Array('Pistol, hvy maser', 's_1_2_0','En/G','20/40/80','d6+1w/2d4+1w/d4+1m',    'Mod-<i>pistol</i>',    '-1',3,   '30','+1','2')
weapon[68] = new Array('Pistol, maser',     's_1_2_0','En/O','10/20/60','d6w/d6+2w/d4m',         'Mod-<i>pistol</i>',    '-2',4,   '40','+2','1')
weapon[69] = new Array('Rifle, hvy maser',  's_1_2_1','En/G','40/200/500','d8+1w/d12w/d6+1m',    'Mod-<i>rifle</i>',     '-1',3,'60/20', '-','5')
weapon[70] = new Array('Rifle, maser',      's_1_2_1','En/O','60/120/400','d6+2w/2d4+2w/d4+2m',  'Mod-<i>rifle</i>',     '-2',4,'90/30', '-','4')
// Heavy Weapons
weapon[71] = new Array('Flamethrower',      's_0_2_0','En/O',   '6/12/30',       'd6w/d6+3w/d8+3w',   'Hvy-<i>direct</i>',    '0',2,   '12', '-','22')
weapon[72] = new Array('Grenade, frag.',    's_0_1_2','HI/G',   'Per STR',       'd4w/d4+2w/d6+2w',   'Athl-<i>throw</i>',   '+1',2,    '-','+2', '1')
weapon[73] = new Array('Machine gun, .30',  's_0_2_0','HI/O',   '60/200/600',    'd6w/d6+3w/d6m',     'Hvy-<i>direct</i>',    '0',4, '-/50', '-','10')
weapon[74] = new Array('Rocket launcher',   's_0_2_0','HI/G',   '30/60/150',     'd6w/d4+3w/d4m',     'Hvy-<i>direct</i>',   '+1',1,    '1', '-', '5')
weapon[75] = new Array('Grenade launcher',  's_0_2_1','As load','50/200/350',    'As load',           'Hvy-<i>indirect</i>',  '0',3,    '1', '-', '2')
weapon[76] = new Array('Grenade, concus.',  's_0_1_2','LI/O',   'Per STR',       'd6+2s/d4w/d4+1w',   'Athl-<i>throw</i>',   '+1',2,    '-','+3', '0.5')
weapon[77] = new Array('Grenade, incend.',  's_0_1_2','En/G',   'Per STR',       'd4w/d4+2w/d4+3w',   'Athl-<i>throw</i>',   '+1',2,    '-','+3', '0.5')
weapon[78] = new Array('Grenade, smoke',    's_0_1_2','Special','Per STR',       'Special',           'Athl-<i>throw</i>',   '+1',2,    '-','+3', '0.5')
weapon[79] = new Array('Hvy machine gun',   's_0_2_0','HI/G',   '100/400/1000',  'd6+1w/2d4+2w/d8m',  'Hvy-<i>direct</i>',    '0',4, '-/50', '-','50')
weapon[80] = new Array('SAM, handheld',     's_0_2_1','HI/G',   '1000/2000/4000','d4w/d6w/d6+4w',     'Hvy-<i>indirect</i>',  '0',1,    '1', '-', '8')
weapon[81] = new Array('Bantam launcher',   's_0_2_1','As load','100/800/4000',  'As load',           'Hvy-<i>indirect</i>',  '0',2,    '4', '-', '7')
weapon[82] = new Array('Bantam, antiair',   's_0_2_1','HI/G',   'As launcher',   'd4w/d4+2w/d4m',     'Hvy-<i>indirect</i>', '-2',2,    '-','+1', '3')
weapon[83] = new Array('Bantam, antiper.',  's_0_2_1','En/O',   'As launcher',   'd6w/d6+2w/d8+2w',   'Hvy-<i>indirect</i>',  '0',2,    '-','+1', '3')
weapon[84] = new Array('Bantam, antiveh.',  's_0_2_1','HI/G',   'As launcher',   'd4+2w/d4+4w/d4+1m', 'Hvy-<i>indirect</i>', '-2',2,    '-','+1', '3')
weapon[85] = new Array('Grenade, plasma',   's_0_1_1','En/G',   'Per STR',       'd4+2w/d6+2w/d4m',   'Athl-<i>throw</i>',   '+1',2,    '-','+3', '0.5')
weapon[86] = new Array('Grenade, stun',     's_0_1_2','En/O',   'Per STR',       'd6s/d8s/d8+2s',     'Athl-<i>throw</i>',   '+1',2,    '-','+3', '0.5')
weapon[87] = new Array('Hvy mach gun, ch',  's_0_2_0','HI/G',   '200/600/1200',  'd8w/2d6w/2d4m',     'Hvy-<i>direct</i>',   '-1',4, '-/50', '-','45')
weapon[88] = new Array('Rail gun',          's_0_2_0','HI/G',   '150/500/1500',  'd6w/d6+2w/d6m',     'Hvy-<i>direct</i>',   '-1',4, '-/30', '-','20')
weapon[89] = new Array('Arc gun',           's_0_2_0','En/G',   '20/40/100',     'd8+1s/d8w/d6+3w',   'Hvy-<i>direct</i>',   '-1',2,    '6', '-','10')
weapon[90] = new Array('Cannon, stutter',   's_0_2_0','LI/O',   '20/40/80',      'd6+2s/d8+3s/2d6+3s','Hvy-<i>direct</i>',   '-1',2,   '10', '-','15')
weapon[91] = new Array('Cannon, 25mm sabot','s_0_2_0','HI/G',   '100/200/2000',  'd8w/d4+1m/d6+2m',   'Hvy-<i>direct</i>',    '0',2,   '20', '-','10')
weapon[92] = new Array('Grenade, pulse',    's_0_1_2','En/G',   'Per STR',       'd4+2s/d6+2s/d8+2s', 'Athl-<i>throw</i>',   '+1',2,    '-','+3', '0.5')
weapon[93] = new Array('Grenade, tracer',   's_0_1_2','HI/G',   'Per STR',       'd4+2w/d6+2w/d4+2m', 'Athl-<i>throw</i>',   '+1',2,    '-','+3', '0.5')
weapon[94] = new Array('Plasma gun',        's_0_2_0','En/G',   '40/80/200',     'd8w/d8+3w/d12+3w',  'Hvy-<i>direct</i>',    '0',2,    '8', '-', '6')
weapon[95] = new Array('Quantum mini',      's_0_2_0','En/G',   '100/250/800',   'd8+1w/d8+3w/d6m',   'Hvy-<i>direct</i>',    '0',4,'90/30', '-','10')
weapon[96] = new Array('Bantam, starload',  's_0_2_1','En/A',   'As launcher',   'd8+2w/d4+1m/d6+1m', 'Hvy-<i>indirect</i>', '-2',2,    '-','+1', '3')
weapon[97] = new Array('Cannon, maser',     's_0_2_0','En/G',   '80/200/600',    'd8w/d4+1m/d6+2m',   'Hvy-<i>direct</i>',   '-1',2,   '12', '-','10')
weapon[98] = new Array('Grenade, mass',     's_0_1_2','En/G',   'Per STR',       'd6+2s/d6+2w/d6m',   'Athl-<i>throw</i>',   '+1',2,    '-','+3', '2')
weapon[99] = new Array('Mass launcher',     's_0_2_1','En/G',   '20/300/1000',   'd6+1w/d6+3w/d4+1m', 'Hvy-<i>indirect</i>', '-1',2,    '5', '-','15')
// Special
weapon[100]= new Array('Power martial arts','s_0_4_1','LI/O',   'Personal',      'd6s/d6+2s/d4w',     'Unarmed-<i>power</i>', '0',4,    '-', '-', '-')
weapon[101]= new Array('Defensive martial arts','s_1_0_1','LI/O','Personal',     'd4s/d4+1s/d4+2s',   'Acro-<i>defensive</i>','0',4,    '-', '-', '-')

armor = new Array(32)
armor[0]  = new Array('Body armor',        'd4+1','d4',  'd4-1', 0,'-',      'O',0, 0,'',       0)
armor[1]  = new Array('Hide armor',        'd6-3','d4-3','d6-4', 1,'s_0_0',  'O',0,10,'Any',  100)
armor[2]  = new Array('Leather armor',     'd6-2','d6-4','d6-4', 0,'-',      'O',2, 7,'Any',  350)
armor[3]  = new Array('Helm',              '+1','0','0',         1,'s_0_0',  'O',0, 4,'Com',  200)
armor[4]  = new Array('Shield, small',     '+1','0','0',         1,'s_0_0',  'O',1, 4,'Any',   75)
armor[5]  = new Array('Chain mail',        'd6-1','d6-4','d6-4', 1,'s_0_0',  'O',1,15,'Com',  750)
armor[6]  = new Array('Plate, full',       'd6+1','d6-3','d6-3', 3,'s_0_0_0','O',0,25,'Con', 2000)
armor[7]  = new Array('Plate, partial',    'd6','d8-5','d6-4',   2,'s_0_0_0','O',1,20,'Com', 1000)
armor[8]  = new Array('Shield, medium',    '+2','+1','0',        2,'s_0_0_0','O',0, 7,'Any',  300)
armor[9]  = new Array('Leather coat',      'd6-3','d4-3','d4-2', 0,'-',      'O',3, 5,'Any',  500)
armor[10] = new Array('Flak jacket',       'd6-2','d4-1','d6-3', 2,'s_0_0_0','O',0,15,'Con',  800)
armor[11] = new Array('Assault gear',      'd6-1','d6-1','d6-1', 3,'s_0_0_0','O',0,10,'Con', 1500)
armor[12] = new Array('Battle vest',       'd6-3','d6-2','d4-2', 0,'-',      'O',2, 5,'Con',  600)
armor[13] = new Array('Riot helmet',       '+1','+1','0',        1,'s_0_0',  'O',0, 2,'Con',  300)
armor[14] = new Array('Riot shield',       '+1','+1','+1',       2,'s_0_0_0','O',0, 4,'Con',  500)
armor[15] = new Array('Assault gear, hvy', 'd6-1', 'd6',  'd6-1',2,'s_0_0_0','O',0,12,'Mil', 2500)
armor[16] = new Array('Attack armor',      'd4+1', 'd6+1','d6-1',3,'s_0_0_0','O',0,15,'Con', 3000)
armor[17] = new Array('Attack armor, pow', 'd6+1', 'd6+2','d6'  ,2,'s_0_0_1','G',0,25,'Mil', 8000)
armor[18] = new Array('Battle jacket',     'd6-1', 'd4+1','d4-1',1,'s_0_0',  'O',1, 8,'Con', 1500)
armor[19] = new Array('CF long coat',      'd4',   'd4',  'd6-2',0,'-',      'O',3, 4,'Com', 1000)
armor[20] = new Array('CF short coat',     'd4-1', 'd4-1','d6-3',0,'-',      'O',3, 3,'Com',  750)
armor[21] = new Array('Body tank',         '2d4+1','2d4+1','2d4',4,'s_0_0_1','G',0,60,'Res',25000)
armor[22] = new Array('Body tank, recon',  '2d4','2d4','d6+2',   3,'s_0_0_1','G',0,45,'Mil',30000)
armor[23] = new Array('Body tank, zero-g', '3d4','3d4','2d4+1',  5,'s_0_0_1','G',0,80,'Res',50000)
armor[24] = new Array('Cerametal armor',   'd6+1','d8+1','d6',   2,'s_0_0_0','O',0,10,'Mil', 2000)
armor[25] = new Array('CF softsuit',       'd6','d6','d6-1',     0,'-',      'O',4, 3,'Con', 2000)
armor[26] = new Array('Deflection harness','<i>see</i>','<i>pages</i>','<i>190 and 191</i>',0,'-','O',3,2,'Con', 2500)
armor[27] = new Array('Ablative harness',  '<i>see</i>','<i>page<i>','<i>191</i>',          0,'-','O',3,2,'Mil', 5000)
armor[28] = new Array('Body tank, over.',  '2d6+1','2d6+1','2d6',3,'s_0_0_1','G',0,40,'Res',70000)
armor[29] = new Array('Displacer softsuit','<i>see</i>','<i>page<i>','<i>191</i>',          0,'-','O',4,3,'Res', 7500)
armor[30] = new Array('Energy web',        'd6-1','d6-1','d6+2', 0,'-',      'O',3, 2,'Mil', 4000)
armor[31] = new Array('Stealth softsuit',  '<i>see</i>','<i>page<i>','<i>191</i>',          0,'-','O',4,2,'Res',10000)

cs_sit_bonus = new Array(17)
cs_sit_bonus[0]  = new Array('',                                        '')
cs_sit_bonus[1]  = new Array('STR: Armor Operation - Combat armor',     's_0_0_0')
cs_sit_bonus[2]  = new Array('STR: Armor Operation - Powered armor',    's_0_0_1')
cs_sit_bonus[3]  = new Array('STR: Heavy Weapons - Direct fire',        's_0_2_0')
cs_sit_bonus[4]  = new Array('STR: Heavy Weapons - Indirect fire',      's_0_2_1')
cs_sit_bonus[5]  = new Array('STR: Melee Weapons - Blade',              's_0_3_0')
cs_sit_bonus[6]  = new Array('STR: Melee Weapons - Bludgeon',           's_0_3_1')
cs_sit_bonus[7]  = new Array('STR: Melee Weapons - Powered Weapon',     's_0_3_2')
cs_sit_bonus[8]  = new Array('STR: Unarmed Attack - Brawl',             's_0_4_0')
cs_sit_bonus[9]  = new Array('STR: Unarmed Attack - Power martial arts','s_0_4_1')
cs_sit_bonus[10] = new Array('DEX: Ranged Weapons, Mod. - Pistol',      's_1_2_0')
cs_sit_bonus[11] = new Array('DEX: Ranged Weapons, Mod. - Rifle',       's_1_2_1')
cs_sit_bonus[12] = new Array('DEX: Ranged Weapons, Mod. - SMG',         's_1_2_2')
cs_sit_bonus[13] = new Array('DEX: Ranged Weapons, Prim. - Bow',        's_1_3_0')
cs_sit_bonus[14] = new Array('DEX: Ranged Weapons, Prim. - Crossbow',   's_1_3_1')
cs_sit_bonus[15] = new Array('DEX: Ranged Weapons, Prim. - Flintlock',  's_1_3_2')
cs_sit_bonus[16] = new Array('DEX: Ranged Weapons, Prim. - Sling',      's_1_3_3')

sec_profession = new Array('', 'Combat Spec', 'Free Agent', 'Tech Op', 'Mind Walker')

resistance_bonus = new Array('', 'Strength', 'Dexterity', 'Intelligence', 'Will')

first_time = true

lengths = new Array('a',12,'w',15,'c',9)

cyber = new Array(27)
cyber[0]  = new Array('BattleKlaw',            '1',2, '300', '600', '900')
cyber[1]  = new Array('BioArt',                '-',0,  '50', '100', '200')
cyber[2]  = new Array('BioWatch',              '-',0,  '50', '100', '300')
cyber[3]  = new Array('Body Plating',          '20',2,'1500',   '-',   '-')
cyber[4]  = new Array('Body Plating',          '40',3,   '-','3000',   '-')
cyber[5]  = new Array('Body Plating',          '60',4,   '-',   '-','4500')
cyber[6]  = new Array('Cyberlimb',             '10',2,'1000','2000','3000')
cyber[7]  = new Array('Cyberoptics',            '-',1, '500','1000','2000')
cyber[8]  = new Array('Fast chip',              '-',2,'1000','1500','2000')
cyber[9]  = new Array('MusclePlus',             '2',2,'1000','2000','3000')
cyber[10] = new Array('Nanocomputer',           '-',1,'2000','3000','4000')
cyber[11] = new Array('NIJack',                 '-',1, '500',   '-',   '-')
cyber[12] = new Array('Optic screen',           '-',0, '250',   '-',   '-')
cyber[13] = new Array('Self-repair unit',       '2',2,'1000','2000','3000')
cyber[14] = new Array('Subdermal comm',         '-',1,   '-', '500',   '-')
cyber[15] = new Array('Subdermal weapon mount', '2',2, '250',   '-',   '-')
cyber[16] = new Array('Subdermal weapon mount', '2',3,   '-', '500',   '-')
cyber[17] = new Array('Subdermal weapon mount', '2',4,   '-',   '-', '750')
cyber[18] = new Array('CF skinweave',           '-',1,'1000','2000','3000')
cyber[19] = new Array('Data slot, passive',     '1',1, '500', '700', '900')
cyber[20] = new Array('ER slot',                '1',1, '500','1000','1500')
cyber[21] = new Array('ER slot, passive',       '1',1, '500','1000','1500')
cyber[22] = new Array('Exoskeleton',           '30',3,'2000','3000','4000')
cyber[23] = new Array('Neural 3D, ext.',        '1',1, '500', '750','1000')
cyber[24] = new Array('Reflex',                 '-',2,   '-','2000',   '-')
cyber[25] = new Array('Subdermal NIJack',       '-',1,   '-', '700',   '-')
cyber[26] = new Array('Wireless NIJack',        '-',1,   '-','1000',   '-')

cyber_nano = '|0|6|7|8|9|11|12|13|15|16|17|20|22|23|24|25|26|'; // nanocomputer required

cyber_free = '|1|2|18|19|21|'; // can be installed at no cost in skill points

mutation = new Array(103)
mutation[0]   = new Array(1, 1, 'CON', 'Adaptation, Environment (hot climate)')
mutation[1]   = new Array(1, 1, 'CON', 'Adaptation, Environment (cold climate)')
mutation[2]   = new Array(1, 1, 'CON', 'Adaptation, Environment (arid climate)')
mutation[3]   = new Array(1, 1, 'CON', 'Adaptation, Environment (thin atmosphere)')
mutation[4]   = new Array(1, 1, 'CON', 'Adaptation, Environment (thick atmosphere)')
mutation[5]   = new Array(1, 1, 'DEX', 'Adaptation, Gravity')
mutation[6]   = new Array(1, 1, 'WIL', 'Adrenal Control')
mutation[7]   = new Array(1, 1, 'WIL', 'Biorhythm Control')
mutation[8]   = new Array(1, 1, 'CON', 'Dermal Reinforcement')
mutation[9]   = new Array(1, 1, 'CON', 'Improved CON')
mutation[10]  = new Array(1, 1, 'DEX', 'Improved DEX')
mutation[11]  = new Array(1, 1, 'CON', 'Improved Durability')
mutation[12]  = new Array(1, 1, 'WIL', 'Improved Healing')
mutation[13]  = new Array(1, 1, 'CON', 'Improved Immunity')
mutation[14]  = new Array(1, 1, 'INT', 'Improved INT')
mutation[15]  = new Array(1, 1, 'PER', 'Improved PER')
mutation[16]  = new Array(1, 1, 'DEX', 'Improved Reflexes')
mutation[17]  = new Array(1, 1, 'WIL', 'Improved Senses')
mutation[18]  = new Array(1, 1, 'STR', 'Improved STR')
mutation[19]  = new Array(1, 1, 'WIL', 'Improved WIL')
mutation[20]  = new Array(1, 1, 'WIL', 'Night Vision')
mutation[21]  = new Array(1, 1, 'WIL', 'Psi Sensitivity')
mutation[22]  = new Array(1, 1, 'CON', 'Toxin Tolerance')
mutation[23]  = new Array(1, 1, 'WIL', 'Vascular Control')
mutation[24]  = new Array(1, 2, 'CON', 'Acid Touch')
mutation[25]  = new Array(1, 2, 'CON', 'Dermal Armor')
mutation[26]  = new Array(1, 2, 'WIL', 'Electric Aura')
mutation[27]  = new Array(1, 2, 'CON', 'Enhanced CON')
mutation[28]  = new Array(1, 2, 'DEX', 'Enhanced DEX')
mutation[29]  = new Array(1, 2, 'CON', 'Enhanced Durability')
mutation[30]  = new Array(1, 2, 'WIL', 'Enhanced Healing')
mutation[31]  = new Array(1, 2, 'CON', 'Enhanced Immunity')
mutation[32]  = new Array(1, 2, 'INT', 'Enhanced INT')
mutation[33]  = new Array(1, 2, 'PER', 'Enhanced PER')
mutation[34]  = new Array(1, 2, 'DEX', 'Enhanced Reflexes')
mutation[35]  = new Array(1, 2, 'WIL', 'Enhanced Senses')
mutation[36]  = new Array(1, 2, 'STR', 'Enhanced STR')
mutation[37]  = new Array(1, 2, 'WIL', 'Enhanced WIL')
mutation[38]  = new Array(1, 2, 'WIL', 'Increased Metabolism')
mutation[39]  = new Array(1, 2, 'STR', 'Natural Attack')
mutation[40]  = new Array(1, 2, 'WIL', 'Psionic Power')
mutation[41]  = new Array(1, 2, 'CON', 'Radiation Tolerance')
mutation[42]  = new Array(1, 2, 'CON', 'Redundant Vital Organs')
mutation[43]  = new Array(1, 2, 'WIL', 'Thermal Vision')
mutation[44]  = new Array(1, 4, 'CON', 'Chameleon Flesh')
mutation[45]  = new Array(1, 4, 'CON', 'Dermal Plating')
mutation[46]  = new Array(1, 4, 'CON', 'Energy Absorption')
mutation[47]  = new Array(1, 4, 'CON', 'Energy Reflection')
mutation[48]  = new Array(1, 4, 'DEX', 'Flight')
mutation[49]  = new Array(1, 4, 'CPN', 'Hyper CON')
mutation[50]  = new Array(1, 4, 'DEX', 'Hyper DEX')
mutation[51]  = new Array(1, 4, 'CON', 'Hyper Durability')
mutation[52]  = new Array(1, 4, 'WIL', 'Hyper Healing')
mutation[53]  = new Array(1, 4, 'CON', 'Hyper Immunity')
mutation[54]  = new Array(1, 4, 'INT', 'Hyper INT')
mutation[55]  = new Array(1, 4, 'CON', 'Hyper Metabolism')
mutation[56]  = new Array(1, 4, 'PER', 'Hyper PER')
mutation[57]  = new Array(1, 4, 'DEX', 'Hyper Reflexes')
mutation[58]  = new Array(1, 4, 'WIL', 'Hyper Senses')
mutation[59]  = new Array(1, 4, 'STR', 'Hyper STR')
mutation[60]  = new Array(1, 4, 'WIL', 'Hyper WIL')
mutation[61]  = new Array(1, 4, 'STR', 'Improved Natural Attack')
mutation[62]  = new Array(1, 4, 'STR', 'Poison Attack')
mutation[63]  = new Array(1, 4, 'WIL', 'Psi Resistance')
mutation[64]  = new Array(2, 1, '',    'Environmental Sensitivity, slight (hot climate)')
mutation[65]  = new Array(2, 1, '',    'Environmental Sensitivity, slight (cold climate)')
mutation[66]  = new Array(2, 1, '',    'Environmental Sensitivity, slight (arid climate)')
mutation[67]  = new Array(2, 1, '',    'Environmental Sensitivity, slight (light gravity)')
mutation[68]  = new Array(2, 1, '',    'Environmental Sensitivity, slight (high gravity)')
mutation[69]  = new Array(2, 1, '',    'Environmental Sensitivity, slight (water)')
mutation[70]  = new Array(2, 1, '',    'Light Sensitivity')
mutation[71]  = new Array(2, 1, '',    'Reduced Ability Score, slight')
mutation[72]  = new Array(2, 1, '',    'Sound Sensitivity')
mutation[73]  = new Array(2, 1, '',    'Temporary Weakness, slight')
mutation[74]  = new Array(2, 1, '',    'Thermal Intolerance')
mutation[75]  = new Array(2, 1, '',    'Toxin Intolerance')
mutation[76]  = new Array(2, 1, '',    'Weak Immunity')
mutation[77]  = new Array(2, 2, '',    'Environmental Sensitivity, moderate (hot climate)')
mutation[78]  = new Array(2, 2, '',    'Environmental Sensitivity, moderate (cold climate)')
mutation[79]  = new Array(2, 2, '',    'Environmental Sensitivity, moderate (arid climate)')
mutation[80]  = new Array(2, 2, '',    'Environmental Sensitivity, moderate (light gravity)')
mutation[81]  = new Array(2, 2, '',    'Environmental Sensitivity, moderate (high gravity)')
mutation[82]  = new Array(2, 2, '',    'Environmental Sensitivity, moderate (water)')
mutation[83]  = new Array(2, 2, '',    'Inefficient Metabolism')
mutation[84]  = new Array(2, 2, '',    'Minor Physical Change')
mutation[85]  = new Array(2, 2, '',    'Reduced Ability Score, moderate')
mutation[86]  = new Array(2, 2, '',    'Slow Reflexes')
mutation[87]  = new Array(2, 2, '',    'Susceptible to Damage')
mutation[88]  = new Array(2, 2, '',    'Temporary Weakness, moderate')
mutation[89]  = new Array(2, 2, '',    'Wild Immunity')
mutation[90]  = new Array(2, 4, '',    'Deadly Immunity')
mutation[91]  = new Array(2, 4, '',    'Environmental Sensitivity, extreme (hot climate)')
mutation[92]  = new Array(2, 4, '',    'Environmental Sensitivity, extreme (cold climate)')
mutation[93]  = new Array(2, 4, '',    'Environmental Sensitivity, extreme (arid climate)')
mutation[94]  = new Array(2, 4, '',    'Environmental Sensitivity, extreme (light gravity)')
mutation[95]  = new Array(2, 4, '',    'Environmental Sensitivity, extreme (high gravity)')
mutation[96]  = new Array(2, 4, '',    'Environmental Sensitivity, extreme (water)')
mutation[97]  = new Array(2, 4, '',    'Highly Susceptible to Damage')
mutation[98]  = new Array(2, 4, '',    'Major Physical Change')
mutation[99]  = new Array(2, 4, '',    'Reduced Ability Score, extreme')
mutation[100] = new Array(2, 4, '',    'Temporary Weakness, extreme')
mutation[101] = new Array(2, 4, '',    'Weak Metabolism')
mutation[102] = new Array(2, 4, '',    'Wild Mutation')

var mi = 59; // first position of mutations in the info cookie

reduced = new Array(71,85,99)

var mutant_radio = new Array(6)
mutant_radio[0] = new Array( 5,'light','high')
mutant_radio[1] = new Array(39,'not retractable','retractable')
mutant_radio[2] = new Array(61,'not retractable','retractable')
mutant_radio[3] = new Array(62,'hemotoxin','neurotoxin','irritant','insinuative','insinuative or inhaled','inhaled')
mutant_radio[4] = new Array(87,'LI','HI','En','LI &amp; HI','LI &amp; En','HI &amp; En','LI (2)','HI (2)','En (2)')
mutant_radio[5] = new Array(97,'LI','HI','En')

font  = ''
tfont = 'h'

last_resorts = 4
last_resort_cost = 1
actions_per_round = 0

achievement_benefit = new Array();  //                                             CS        D         F         T         M
achievement_benefit[0]  = new Array('Action Check Bonus',                       10,  3,   12,  5,   10,  3,   10,  3,   10,  3)
achievement_benefit[1]  = new Array('Action Check Increase #1',                  4,  3,    4,  3,    3,  3,    4,  4,    4,  6)
achievement_benefit[2]  = new Array('Action Check Increase #2',                  4,  3,    4,  3,    3,  3,    4,  4,    4,  6)
achievement_benefit[3]  = new Array('Action Check Increase #3',                  4,  3,    4,  3,    3,  3,    4,  4,    4,  6)
achievement_benefit[4]  = new Array('Extra Action',                              6,  6,    6,  6,    5,  4,    6,  5,    6,  4)
achievement_benefit[5]  = new Array('Ability Score Increase #1: Strength',      10,  3,   15,  6,   15,  6,   15,  9,   15,  9)
achievement_benefit[6]  = new Array('Ability Score Increase #1: Dexterity',     15,  5,   15,  7,   10,  3,   10,  3,   15,  6)
achievement_benefit[7]  = new Array('Ability Score Increase #1: Constitution',  10,  3,   15,  9,   15,  5,   15,  6,   10,  4)
achievement_benefit[8]  = new Array('Ability Score Increase #1: Intelligence',  15,  6,   10,  5,   15,  4,   10,  3,   10,  3)
achievement_benefit[9]  = new Array('Ability Score Increase #1: Will',          15,  7,   10,  3,   10,  3,   10,  5,   10,  3)
achievement_benefit[10] = new Array('Ability Score Increase #1: Personality',   10,  4,   10,  3,   10,  5,   15,  7,   15,  4)
achievement_benefit[11] = new Array('Ability Score Increase #2: Strength',      20,  6,   30,  9,   30,  9,   30, 12,   30, 12)
achievement_benefit[12] = new Array('Ability Score Increase #2: Dexterity',     30,  8,   30, 10,   20,  6,   20,  6,   30,  9)
achievement_benefit[13] = new Array('Ability Score Increase #2: Constitution',  20,  6,   30, 12,   30,  8,   30,  9,   20,  7)
achievement_benefit[14] = new Array('Ability Score Increase #2: Intelligence',  30,  9,   20,  8,   30,  7,   20,  6,   20,  6)
achievement_benefit[15] = new Array('Ability Score Increase #2: Will',          30, 10,   20,  6,   20,  6,   20,  8,   20,  6)
achievement_benefit[16] = new Array('Ability Score Increase #2: Personality',   20,  7,   20,  6,   20,  8,   30, 10,   30,  7)
achievement_benefit[17] = new Array('Fatigue Rating Increase',                   4,  3,    5,  4,   10,  3,   10,  4,    6,  5)
achievement_benefit[18] = new Array('Mortal Rating Increase',                    8,  3,   10,  6,   20,  5,   20,  6,   12,  7)
achievement_benefit[19] = new Array('Stun Rating Increase #1',                   4,  4,    4,  4,    4,  3,    4,  5,    4,  5)
achievement_benefit[20] = new Array('Stun Rating Increase #2',                   4,  4,    4,  4,    4,  3,    4,  5,    4,  5)
achievement_benefit[21] = new Array('Stun Rating Increase #3',                   4,  4,    4,  4,    4,  3,    4,  5,    4,  5)
achievement_benefit[22] = new Array('Wound Rating Increase #1',                  6,  5,    7,  5,    7,  4,    7,  4,    8,  6)
achievement_benefit[23] = new Array('Wound Rating Increase #2',                  6,  5,    7,  5,    7,  4,    7,  4,    8,  6)
achievement_benefit[24] = new Array('Monetary Award #1',                         6,  3,    5,  3,    6,  3,    6,  3,    6,  3)
achievement_benefit[25] = new Array('Monetary Award #2',                         6,  6,    5,  6,    6,  6,    6,  6,    6,  6)
achievement_benefit[26] = new Array('Monetary Award #3',                         6,  9,    5,  9,    6,  9,    6,  9,    6,  9)
achievement_benefit[27] = new Array('Monetary Award #4',                         6, 12,    5, 12,    6, 12,    6, 12,    6, 12)
achievement_benefit[28] = new Array('Monetary Award #5',                         6, 15,    5, 15,    6, 15,    6, 15,    6, 15)
achievement_benefit[29] = new Array('Monetary Award #6',                         6, 18,    5, 18,    6, 18,    6, 18,    6, 18)
achievement_benefit[30] = new Array('Monetary Award #7',                         6, 21,    5, 21,    6, 21,    6, 21,    6, 21)
achievement_benefit[31] = new Array('Monetary Award #8',                         6, 24,    5, 24,    6, 24,    6, 24,    6, 24)
achievement_benefit[32] = new Array('New Perk: Ambidextrous',                    6,  7,    6,  6,    5,  3,    5,  6,    6,  6)
achievement_benefit[33] = new Array('New Perk: Animal Friend',                   3,  3,    3,  4,    3,  4,    4,  4,    4,  5)
achievement_benefit[34] = new Array('New Perk: Celebrity',                       4,  6,    4,  3,    4,  5,    4,  9,    4,  8)
achievement_benefit[35] = new Array('New Perk: Concentration',                   5,  5,    5,  4,    5,  5,    4,  3,    4,  3)
achievement_benefit[36] = new Array('New Perk: Danger Sense',                    5,  6,    6,  7,    5,  3,    6,  7,    5,  6)
achievement_benefit[37] = new Array('New Perk: Fists of Iron',                '3/6', 5, '4/8', 9, '3/6', 4, '4/8', 9, '4/8', 9)
achievement_benefit[38] = new Array('New Perk: Fortitude',                       5,  3,    6,  5,    6,  5,    5,  5,    6,  8)
achievement_benefit[39] = new Array('New Perk: Observant',                       5,  3,    5,  4,    5,  3,    6,  5,    5,  5)
achievement_benefit[40] = new Array('New Perk: Photo Memory',                    5,  8,    4,  5,    5,  7,    4,  7,    4,  3)
achievement_benefit[41] = new Array('New Perk: Powerful Ally',                   5,  4,    5,  6,    5,  4,    6,  7,    6,  8)
achievement_benefit[42] = new Array('New Perk: Reflexes',                        6,  4,    6,  6,    5,  3,    5,  4,    6,  6)
achievement_benefit[43] = new Array('New Perk: Reputation',                      4,  4,    5,  5,    5,  5,    5,  4,    4,  6)
achievement_benefit[44] = new Array('New Perk: Tough as Nails',                  5,  3,    6,  9,    6,  6,    5,  5,    6,  9)
achievement_benefit[45] = new Array('New Perk: Willpower',                       6,  8,    6,  5,    6,  6,    6,  5,    5,  4)
achievement_benefit[46] = new Array('Remove Flaw: ' + flaw[0][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[47] = new Array('Remove Flaw: ' + flaw[1][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[48] = new Array('Remove Flaw: ' + flaw[2][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[49] = new Array('Remove Flaw: ' + flaw[3][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[50] = new Array('Remove Flaw: ' + flaw[4][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[51] = new Array('Remove Flaw: ' + flaw[5][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[52] = new Array('Remove Flaw: ' + flaw[6][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[53] = new Array('Remove Flaw: ' + flaw[7][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[54] = new Array('Remove Flaw: ' + flaw[8][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[55] = new Array('Remove Flaw: ' + flaw[9][0],              'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[56] = new Array('Remove Flaw: ' + flaw[10][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[57] = new Array('Remove Flaw: ' + flaw[11][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[58] = new Array('Remove Flaw: ' + flaw[12][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[59] = new Array('Remove Flaw: ' + flaw[13][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[60] = new Array('Remove Flaw: ' + flaw[14][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[61] = new Array('Remove Flaw: ' + flaw[15][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[62] = new Array('Remove Flaw: ' + flaw[16][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[63] = new Array('Remove Flaw: ' + flaw[17][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[64] = new Array('Remove Flaw: ' + flaw[18][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[65] = new Array('Remove Flaw: ' + flaw[19][0],             'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6,  'x2', 6)
achievement_benefit[66] = new Array('Acquire Contact #1',                        5,  4,    3,  2,    4,  2,    5,  4,    5,  6)
achievement_benefit[67] = new Array('Acquire Contact #2',                        5,  4,    3,  2,    4,  2,    5,  4,    5,  6)
achievement_benefit[68] = new Array('Acquire Contact #3',                        5,  4,    3,  2,    4,  2,    5,  4,    5,  6)
achievement_benefit[69] = new Array('Acquire Contact #4',                        5,  4,    3,  2,    4,  2,    5,  4,    5,  6)
achievement_benefit[70] = new Array('Acquire Contact #5',                        5,  4,    3,  2,    4,  2,    5,  4,    5,  6)

new_perk = new Array()
new_perk[0]  = -1; // [perk] = benefit
new_perk[1]  = 32
new_perk[2]  = 33
new_perk[3]  = 34
new_perk[4]  = 35
new_perk[5]  = 36
new_perk[6]  = -1
new_perk[7]  = -1
new_perk[8]  = 37
new_perk[9]  = 38
new_perk[10] = -1
new_perk[11] = -1
new_perk[12] = -1
new_perk[13] = 39
new_perk[14] = 40
new_perk[15] = 41
new_perk[16] = -1
new_perk[17] = 42
new_perk[18] = 43
new_perk[19] = 44
new_perk[20] = -1
new_perk[21] = 45
new_perk[32] =  1; // [benefit] = perk
new_perk[33] =  2
new_perk[34] =  3
new_perk[35] =  4
new_perk[36] =  5
new_perk[37] =  8
new_perk[38] =  9
new_perk[39] = 13
new_perk[40] = 14
new_perk[41] = 15
new_perk[42] = 17
new_perk[43] = 18
new_perk[44] = 19
new_perk[45] = 21

function set_values() // called when the page is loaded
{
	if (!first_time)
		return
	var f = parent.frames[0].document.forms[0]
	var cookie = get_cookie('info')
	var future_growth = 6
	if (cookie != '') {
		set_cookie('info', cookie)
		var token = cookie.split('\t')
		f.i_2.selectedIndex = token[2]; // species
		f.i_4.selectedIndex = token[4]; // profession
		set_abilities(false)
		set_profession_listboxes()
		cookie = get_cookie('info')
		token = cookie.split('\t')
		for (var x=0; x<48; x++)
			set_value(x, token[x])
		if (token.length == 48)
		{
			cookie += '\t0'; // use Alternity font?
			cookie += '\t0'; // Achievement Points
			cookie += '\t0'; // Last Resorts Purchased
			cookie += '\t0'; // Last Resorts Used
			cookie += '\t0'; // Weapon Accuracy
			for (var x=0; x<future_growth; x++)
				cookie += '\t'
			set_cookie('info', cookie += '\t0\t0\t0\t0')
		}
		else
		{
			set_value(48, token[48])
			for (var x=49; x<=52; x++)
				if (token[x].length == 0)
					token[x] = 0
			set_value(52, token[52])
			var cookie = ''
			for (var x=0; x<token.length; x++)
				cookie += '\t' + token[x]
			set_cookie('info', cookie.substring(1))
		}
	}
	else
	{
		cookie = ''
		for (var x=0; x<49; x++)
			cookie += '\t' + get_value(x)
		cookie += '\t0\t0\t0'
		cookie += '\t' + get_value(52)
		for (var x=0; x<future_growth; x++)
			cookie += '\t'
		cookie += '\t0\t0\t0\t0'
		set_cookie('info', cookie.substring(1))
	}
	cookie = get_cookie('skills')
	if (cookie != '')
	{
		var token = cookie.split('\t')
		var x = 1
		while (x < token.length-1)
		{
			var index = token[x].split('_')
			if (index.length == 3)
				x++
			else if (index.length == 4)
				x += 2
			else if (index.length == 5)
			{
				if (token[x+1].charAt(0) != '\n')
				token[x+1] = '\n' + token[x+1]
				x += 2
			}
			else if (index.length == 6)
				x += 2
		}
		cookie = '\t'
		for (var x=1; x<token.length-1; x++)
			cookie += token[x] + '\t'
		set_cookie('skills', cookie)
	}
	else
		set_skills()
	cookie = get_cookie('weapons_armor_perks_flaws')
	if (cookie != '')
	{
		set_cookie('other', cookie)
		document.cookie = 'weapons_armor_perks_flaws=\t'
		for (var x=0; x<files; x++)
		{
			var cookie = get_cookie('weapons_armor_perks_flaws_' + x)
			if (cookie != '')
			{
				set_cookie('other_' + x, cookie)
				document.cookie = 'weapons_armor_perks_flaws_' + x + '=\t'
			}
			else
				break
		}
	}
	cookie = get_cookie('other')
	if (cookie != '')
	{
		set_cookie('other', cookie)
		var token = cookie.split('\t')
		var x = 1
		while (x < token.length-1)
		{
			if (token[x].charAt(0) == 'm' || token[x].charAt(0) == 'b')
			{
				x += 2
				continue
			}
			eval('f.' + token[x] + '.checked = true;')
			if (token[x].charAt(0) == 'w' || token[x].charAt(0) == 'a')
				x++
			else if (token[x].charAt(0) == 'p' || token[x].charAt(0) == 'f')
			{
				if (token[x+1].length > 0)
				{
					if (token[x] == 'p_20')
					{
						if (token[x+1].length == 1)
						{
							eval('f.' + token[x] + '_r_' + token[x+1] + '.checked = true')
							set_perk_flaw_cost('p_20_r_' + token[x+1])
						}
						else
							for (var i=0; i<3; i++)
								eval('f.' + token[x] + '_r_' + i + '.checked = ' + (token[x+1].charAt(i) == '1'))
					}
					else if (token[x] != 'p_12')
						eval('f.' + token[x] + '_r[' + token[x+1] + '].checked = true')
					else
						eval('f.' + token[x] + '_r.selectedIndex = ' + token[x+1])
				}
				x += 2
			}
			else if (token[x].charAt(0) == 'c')
			{
				if (token[x+1].length > 0)
					eval('f.' + token[x] + '_r[' + token[x+1] + '].checked = true')
				x += 2
			}
		}
		if (get_species(f) == 'Mechalus')
		{
			f.c_10.checked = true
			f.c_10_r[1].checked = true
			f.c_19.checked = true
			f.c_24.checked = true
			if (cookie.indexOf('\tc_10\t') == -1)
				cookie += 'c_10\t1\t'
			if (cookie.indexOf('\tc_19\t') == -1)
				cookie += 'c_19\t0\t'
			if (cookie.indexOf('\tc_24\t') == -1)
				cookie += 'c_24\t\t'
			set_cookie('other', cookie)
		}
	}
	else if (get_species(f) == 'Mechalus')
	{
		f.c_10.checked = true
		f.c_10_r[1].checked = true
		f.c_19.checked = true
		f.c_24.checked = true
		set_cookie('other', '\tc_10\t1\tc_19\t0\tc_24\t\t')
	}
	else
		set_cookie('other', '\t')
	cookie = get_cookie('custom')
	if (cookie != '')
		set_cookie('custom', cookie)
	else
		set_cookie('custom', '\t')
	refresh_saved_cookies()
	first_time = false
}
function set_skills()
//
// called when the page is loaded and the skills cookie is not present
// called when the species is changed
{
	var f = parent.frames[0].document.forms[0]
	var species = get_species(f)

	var cookie = '\t'

	for (var x=0; x<spec.length; x++)
		if (spec[x] == species)
		{
			for (var i=0; i<6; i++)
				if (free_broad_skill[x][i].length > 0)
					cookie += free_broad_skill[x][i] + '\t'
			break
		}

	set_cookie('skills', cookie)

	f.p_8_r[0].checked = true

	if (species == 'Mechalus')
	{
		f.c_10.checked = true
		f.c_10_r[1].checked = true
		f.c_19.checked = true
		f.c_24.checked = true
	}
}
function get_value(index)
{
	var f = parent.frames[0].document.forms[0]
	if (radios.indexOf('|' + index + '|') != -1)
	{
		var len = eval('f.i_' + index + '.length')
		for (var x=0; x<len; x++)
			if (eval('f.i_' + index + '[' + x + '].checked'))
				return(x)
	}
	else if (selections.indexOf('|' + index + '|') != -1)
		return(eval('f.i_' + index + '.selectedIndex'))
	else if (checkboxes.indexOf('|' + index + '|') != -1)
		return(eval('f.i_' + index + '.checked')?1:0)
	else
		return(eval('f.i_' + index + '.value'))
}
function set_profession_listboxes()
{
	var f = parent.frames[0].document.forms[0]
	var value = f.i_4.selectedIndex
	if (value == 0)
		for (var x=1; x<cs_sit_bonus.length; x++)
			f.i_10.options[x] = new Option(cs_sit_bonus[x][0])
	else
		for (var x=cs_sit_bonus.length-1; x>=1; x--)
			f.i_10.options[x] = null
	if (value == 1)
		for (var x=1; x<sec_profession.length; x++)
			f.i_11.options[x] = new Option(sec_profession[x])
	else
		for (var x=sec_profession.length-1; x>=1; x--)
			f.i_11.options[x] = null
	if (value == 2)
		for (var x=1; x<resistance_bonus.length; x++)
			f.i_12.options[x] = new Option(resistance_bonus[x])
	else
		for (var x=resistance_bonus.length-1; x>=1; x--)
			f.i_12.options[x] = null
}
function set_info_cookie(name)
{
	var index = parseInt(name.substring(2))
	var f = parent.frames[0].document.forms[0]
	var cookie = get_cookie('info')
	var token = cookie.split('\t')
	token[index] = get_value(index)
	if (index == 4) // profession
	{
		set_profession_listboxes()
		for (var x=10; x<=12; x++)
		{
			eval('f.i_' + x + '.selectedIndex = 0')
			token[x] = 0
		}
	}
	var cookie = ''
	for (var x=0; x<token.length; x++)
		cookie += '\t' + token[x]
	set_cookie('info', cookie.substring(1))
}
function set_abilities(set_cookie)
{
	var f = parent.frames[0].document.forms[0]
	var p = f.i_4.selectedIndex; // profession
	var s = f.i_2.selectedIndex; // species

	var value = new Array(ability.length)
	for (var x=0; x<ability.length; x++)
	{
		value[x] = eval('f.i_' + (abilities+x) + '.options[f.i_' + (abilities+x) + '.selectedIndex].text')
		var length = eval('f.i_' + (abilities+x) + '.length')
		for (var y=length-1; y>=0; y--)
			eval('f.i_' + (abilities+x) + '.options[' + y + '] = null;')
		var min = ability_score_limit[s][2*x]
		var max = ability_score_limit[s][2*x+1]
		if (profession_requirement[p][x] > min)
			min = profession_requirement[p][x]
		for (var i=min; i<=max; i++)
		{
			eval('f.i_' + (abilities+x) + '.options[' + (i-min) + '] = new Option(' + i + ');')
			if (i == min || i == value[x])
				eval('f.i_' + (abilities+x) + '.options[' + (i-min) + '].selected = true;')
		}
		if (set_cookie)
			set_info_cookie('i_' + (abilities+x))
	}
}
function have_skill(skill)
{
	return(cookiee[skills].indexOf('\t' + skill + '\t') > -1)
}
function skill_value(skill)
{
	var index = cookiee[skills].indexOf('\t' + skill + '\t')
	if (index == -1)
		return(0)
	index = cookiee[skills].indexOf('\t', index+1)
	var index2 = cookiee[skills].indexOf('\t', index+1)
	return(parseInt(cookiee[skills].substring(index+1, index2)))
}
function skill_text(skill)
{
	var index = cookiee[skills].indexOf('\t' + skill + '\t')
	if (index == -1)
		return('')
	index = cookiee[skills].indexOf('\t', index+1)
	var index2 = cookiee[skills].indexOf('\t', index+1)
	return(cookiee[skills].substring(index+1, index2))
}
function have_benefit(benefit)
{
	return(cookiee[other].indexOf('\tb_' + benefit + '\t') > -1)
}
function benefit_value(benefit)
{
	var index = cookiee[other].indexOf('\tb_' + benefit + '\t')
	if (index == -1)
		return(0)
	index = cookiee[other].indexOf('\t', index+1)
	var index2 = cookiee[other].indexOf('\t', index+1)
	return(parseInt(cookiee[other].substring(index+1, index2)))
}
function adjust_armor(f)
{
	var adjustment = 0
	var found = false
	for (var x=1; x<armor.length; x++)
		if (eval('f.a_' + x + '.checked'))
		{
			found = true
			if (armor[x][4] == 0)
				break
			adjustment -= armor[x][4]
			if (have_skill('s_0_0'))
			{
				adjustment++
				for (var i=0; i<2; i++)
				{
					var selectedIndex = skill_value('s_0_0_' + i)
					if (selectedIndex > 0 && armor[x][5] == 's_0_0_' + i)
						adjustment += Math.ceil(selectedIndex/3)
				}
			}
			break
		}
	if (!found)
	{
		var cookie = get_cookie('custom')
		var token = cookie.split('\t')
		var x = 1
		while (x < token.length-1)
		{
			if (token[x] == 'a')
			{
				if (token[x+3] == '0')
					break
				adjustment -= parseInt(token[x+3].substring(1))
				if (have_skill('s_0_0'))
					adjustment++
				var sk = new Array('combat','powered')
				for (var i=0; i<2; i++)
				{
					var selectedIndex = skill_value('s_0_0_' + i)
					if (selectedIndex > 0 && token[x+2] == sk[i])
						adjustment += Math.ceil(selectedIndex/3)
				}
				break
			}
			x += get_length(token[x])
		}
	}
	if (adjustment > 0)
		adjustment = 0
	return(adjustment)
}
function adjust_melee(f)
{
	var adjustment = 0
	for (x=0; x<skill[0][3].length; x++)
	{
		var melee = skill_value('s_0_3_' + x)
		if (melee > 0)
			adjustment += Math.floor(melee/4)
	}
	return(adjustment)
}
function adjust_power_ma(f)
{
	var adjustment = 0
	var power_ma = skill_value('s_0_4_1')
	if (power_ma > 0)
		adjustment += Math.floor(power_ma/4)
	return(adjustment)
}
function adjust_def_ma(f)
{
	var adjustment = 0
	var def_ma = skill_value('s_1_0_1')
	if (def_ma > 0)
		adjustment += Math.floor(def_ma/4)
	return(adjustment)
}
function adjust_dodge(f)
{
	var adjustment = 0
	var dodge = skill_value('s_1_0_2')
	if (dodge > 0)
		adjustment += Math.floor(dodge/4)
	return(adjustment)
}
function adjust_deduce(f)
{
	var adjustment = 0
	var deduce = skill_value('s_3_3_1')
	if (deduce > 0)
		adjustment += Math.floor(deduce/4)
	return(adjustment)
}
function adjust_mental_resolve(f)
{
	var adjustment = 0
	var mental_resolve = skill_value('s_4_5_0')
	if (mental_resolve > 0)
		adjustment += Math.floor(mental_resolve/4)
	return(adjustment)
}
function resistance_modifier(f, index)
{
	var rm = 0
	if (ability_score[index] <= 4)
		rm = -2
	else if (ability_score[index] <= 6)
		rm = -1
	else if (ability_score[index] <= 10)
		rm = 0
	else if (ability_score[index] <= 12)
		rm = 1
	else if (ability_score[index] <= 14)
		rm = 2
	else if (ability_score[index] <= 16)
		rm = 3
	else if (ability_score[index] <= 18)
		rm = 4
	else
		rm = 5
	if (f.i_12.options[f.i_12.selectedIndex].text == ability[index])
		rm++
	if (index == strength)
	{
		rm += adjust_melee(f) + adjust_power_ma(f) + adjust_def_ma(f)
		if (f.p_19.checked)
			rm++
	}
	else if (index == dexterity)
	{
		rm += adjust_dodge(f) //+ adjust_armor(f)
		if (f.p_17.checked)
			rm++
	}
	else if (index == intelligence)
	{
		rm += adjust_deduce(f)
	}
	else if (index == will)
	{
		rm += adjust_mental_resolve(f)
		if (f.p_21.checked)
			rm++
		if (f.f_18.checked)
		{
			if (f.f_18_r[0].checked)
				rm--
			else if (f.f_18_r[1].checked)
				rm -= 2
			else if (f.f_18_r[2].checked)
				rm -= 3
		}
	}
	rm = Math.min(rm, 5)
	return(rm)
}
function set_combat_movement_rates()
{
	var index = 0
	strdex = ability_score[strength] + ability_score[dexterity]
	if (strdex >= 8 && strdex <= 9)
		index = 1
	else if (strdex >= 10 && strdex <= 11)
		index = 2
	else if (strdex >= 12 && strdex <= 13)
		index = 3
	else if (strdex >= 14 && strdex <= 15)
		index = 4
	else if (strdex >= 16 && strdex <= 17)
		index = 5
	else if (strdex >= 18 && strdex <= 19)
		index = 6
	else if (strdex >= 20 && strdex <= 21)
		index = 7
	else if (strdex >= 22 && strdex <= 23)
		index = 8
	else if (strdex >= 24 && strdex <= 25)
		index = 9
	else if (strdex >= 26 && strdex <= 27)
		index = 10
	else if (strdex >= 28 && strdex <= 29)
		index = 11
	else if (strdex >= 30 && strdex <= 31)
		index = 12
	else if (strdex >= 32)
		index = 13
	return(index)
}
function adjust_glide(f)
{
	var adjustment = 0
	var flight = skill_value('s_1_0_4')
	if (flight >= 11)
		adjustment = 6
	else if (flight >= 7)
		adjustment = 4
	else if (flight >= 3)
		adjustment = 2
	return(adjustment)
}
function adjust_fly(f)
{
	var adjustment = 0
	var flight = skill_value('s_1_0_4')
	if (flight >= 12)
		adjustment = 9
	else if (flight >= 8)
		adjustment = 6
	else if (flight >= 4)
		adjustment = 3
	return(adjustment)
}
function adjust_run(f)
{
	var adjustment = 0
	var race = skill_value('s_2_0_0')
	if (race >= 9)
		adjustment = 4
	else if (race >= 5)
		adjustment = 2
	return(adjustment)
}
function adjust_sprint(f)
{
	var adjustment = 0
	var race = skill_value('s_2_0_0')
	if (race >= 12)
		adjustment = 6
	else if (race >= 7)
		adjustment = 4
	else if (race >= 4)
		adjustment = 2
	return(adjustment)
}
function adjust_swim(f)
{
	var adjustment = 0
	var swim = skill_value('s_2_0_1')
	if (swim >= 12)
		adjustment = 3
	else if (swim >= 8)
		adjustment = 2
	else if (swim >= 4)
		adjustment = 1
	return(adjustment)
}
function set_value(index, value)
{
	var f = parent.frames[0].document.forms[0]
	if (radios.indexOf('|' + index + '|') != -1)
	{
		if (isNaN(value))
			value = 0
		eval('f.i_' + index + '[' + value + '].checked = true')
		if (index == 9 && value == 2)
			document.kaboom.src = 'kaboom.gif'
	}
	else if (selections.indexOf('|' + index + '|') != -1)
	{
		if (isNaN(value))
			value = 0
		eval('f.i_' + index + '.selectedIndex = ' + value)
	}
	else if (checkboxes.indexOf('|' + index + '|') != -1)
	{
		if (isNaN(value))
			value = 0
		eval('f.i_' + index + '.checked = ' + (value==1?'true':'false'))
	}
	else
	{
		var token = value.split('"')
		value = token[0]
		for (var x=1; x<token.length; x++)
			value += '\\"' + token[x];	
		var token = value.split('\r')
		value = token[0]
		for (var x=1; x<token.length; x++)
			value += token[x];	
		var token = value.split('\n')
		value = token[0]
		for (var x=1; x<token.length; x++)
			value += '\\n' + token[x];	
		eval('f.i_' + index + '.value = "' + value + '"')
	}
}
function get_species(f)
{
	return(f.i_2.options[f.i_2.selectedIndex].text)
}
function refresh_saved_cookies()
{
	for (var x=0; x<files; x++)
	{
		var cookie = get_cookie(cookies[0] + '_' + x)
		if (cookie != '')
			for (var y=0; y<cookies.length; y++)
			{
				cookie  = get_cookie(cookies[y] + '_' + x)
				set_cookie(cookies[y] + '_' + x, cookie)
			}
		else
			break
	}
}
function unhtml(s)
{
	if (s.charAt(0) != '<')
		return(s)
	var index = s.indexOf('>') + 1
	var index2 = s.indexOf('<', index)
	return(s.substring(index, index2))
}
function user_selected_perks(cookie)
{
	var perks = 0
	for (var x=0; x<perk.length; x++)
		if (cookie.indexOf('\tp_' + x + '\t') > -1 && perk[x][0].charAt(0) == '<')
			perks++
	for (x=32; x<46; x++)
		if (cookie.indexOf('\tb_' + x + '\t') > -1)
			perks++
	return(perks)
}
function toggle_perks_flaws(name)
{
	var f = parent.frames[0].document.forms[0]
	var checked = eval('f.' + name + '.checked')
	var token = name.split('_')
	if (checked)
	{
		for (var x=0; x<costanza.length; x++)
		{
			if (name == costanza[x][0])
			{
				if (eval('f.' + costanza[x][1] + '.checked'))
				{
					var tkn = costanza[x][1].split('_')
					alert('You may not purchase the ' + unhtml(perk[token[1]][0]) + ' perk while you have the ' + flaw[tkn[1]][0] + ' flaw!')
					eval('f.' + name + '.checked = false')
					return
				}
			}
			else if (name == costanza[x][1])
			{
				if (eval('f.' + costanza[x][0] + '.checked'))
				{
					var tkn = costanza[x][0].split('_')
					alert('You may not purchase the ' + flaw[token[1]][0] + ' flaw while you have the ' + unhtml(perk[tkn[1]][0]) + ' perk!')
					eval('f.' + name + '.checked = false')
					return
				}
			}
		}
	}
	var cookie = get_cookie('other')
	if (checked)
	{
		if (token[0] == 'p')
		{
			if (perk[token[1]][0].charAt(0) == '<')
			{
				var info_cookie = get_cookie('info')
				var tkn = info_cookie.split('\t')
				if (tkn[49] > 0)
				{
					alert('You may only purchase this perk when your hero is created!')
					eval('f.' + name + '.checked = false')
					return
				}
				if (user_selected_perks(cookie) == 3)
				{
					alert('You may only purchase three perks!')
					eval('f.' + name + '.checked = false')
					return
				}
			}
		}
		else // Flaw + Checked
		{
			if (cookie.indexOf('\tb_' + (46+parseInt(token[1])) + '\t') > -1)
			{
				alert('Go to the Achievement Benefits window to add this flaw!')
				eval('f.' + name + '.checked = false')
				return
			}
			var flaws = 0
			for (var x=0; x<flaw.length; x++)
				if (eval('f.f_' + x + '.checked'))
					flaws++
			if (flaws > 3)
			{
				alert('You may only select three flaws!')
				eval('f.' + name + '.checked = false')
				return
			}
		}
	}
	else if (token[0] == 'p')
	{
		if (cookie.indexOf('\tb_' + new_perk[token[1]] + '\t') > -1)
		{
			alert('Go to the Achievement Benefits window to remove this perk!')
			eval('f.' + name + '.checked = true')
			return
		}
	}
	var index = cookie.indexOf('\t' + name + '\t')
	if (checked && index == -1)
	{
		var x = -1
		if (token[0] == 'p')
			x = eval('perk[' + token[1] + '][1].indexOf("/")')
		else
			x = eval('flaw[' + token[1] + '][1].indexOf("/")')
		if (x == -1)
			set_cookie('other', cookie + name + '\t\t')
		else
		{
			if (name == 'p_20')
			{
				var i = ''
				for (var z=0; z<3; z++)
					if (eval('f.' + name + '_r_' + z + '.checked'))
						i += '1'
					else
						i += '0'
				set_cookie('other', cookie + name + '\t' + i + '\t')
			}
			else
			{
				var state = 'checked'
				if (name == 'p_12')
					state = 'selected'
				var len = eval('f.' + name + '_r.length')
				for (var i=0; i<len; i++)
					if (eval('f.' + name + '_r[' + i + '].' + state))
					{
						set_cookie('other', cookie + name + '\t' + i + '\t')
						break
					}
			}
		}
	}
	else if (!checked && index > -1)
	{
		var before = ''
		if (index > 0)
			before = cookie.substring(0, index)
		var index2 = cookie.indexOf('\t', index+1)
		var index3 = cookie.indexOf('\t', index2+1)
		var after = cookie.substring(index3)
		set_cookie('other', before+after)
	}
}
function set_perk_flaw_cost(name,refresh)
{
	var f = parent.frames[0].document.forms[0]
	if (name == 'p_8_r' && eval('f.' + name + '[1].checked') && skill_value('s_0_4_1') < 1)
	{
		alert('Improved Fists of Iron may only be purchased\nwith the power martial arts specialty skill!')
		eval('f.' + name + '[0].checked = true')
		return
	}
	var token = name.split('_')
	if (!eval('f.' + token[0] + '_' + token[1] + '.checked'))
		return
	var i = 0
	if (token[0] + '_' + token[1] == 'p_20')
	{
		i = ''
		for (var x=0; x<3; x++)
			if (eval('f.p_20_r_' + x + '.checked'))
				i += '1'
			else
				i += '0'
	}
	else
	{
		var len = eval('f.' + name + '.length')
		var state = 'checked'
		if (name == 'p_12_r')
			state = 'selected'
		for (i=0; i<len; i++)
			if (eval('f.' + name + '[' + i + '].' + state))
				break
	}
	var cookie = get_cookie('other')
	var index  = cookie.indexOf('\t' + token[0] + '_' + token[1] + '\t')
	var index2 = cookie.indexOf('\t', index+1)
	var index3 = cookie.indexOf('\t', index2+1)
	var before = cookie.substring(0, index2+1)
	var after  = cookie.substring(index3)
	set_cookie('other', before + i + after)
	if (refresh)
		chargen()
}
function toggle_weapons_armor(name)
{
	var f = parent.frames[0].document.forms[0]
	var checked = eval('f.' + name + '.checked')
	var cookie = get_cookie('other')
	var index = cookie.indexOf('\t' + name + '\t')
	if (checked && index == -1)
		set_cookie('other', cookie + name + '\t')
	else if (!checked && index > -1)
	{
		var before = ''
		if (index > 0)
			before = cookie.substring(0, index)
		var index2 = cookie.indexOf('\t', index+1)
		var after = cookie.substring(index2)
		set_cookie('other', before+after)
	}
}
function adjust_ability_score(f, species, profession)
{
	for (var x=0; x<ability_score.length; x++)
		ability_score[x] = parseInt(eval('f.i_' + (abilities+x) + '.options[f.i_' + (abilities+x) + '.selectedIndex].text'))
	if (f.p_12.checked)
	{
		for (var x=0; x<ability.length; x++)
			if (ability[x].substring(0,3).toUpperCase() ==
					f.p_12_r.options[f.p_12_r.selectedIndex].value)
			{
				if (ability_score[x] < ability_score_limit[f.i_2.selectedIndex][2*x+1])
					ability_score[x]++
				break
			}
	}
	if (f.c_5.checked) // Body Plating: Amazing
		ability_score[dexterity] -= 2
	if (f.c_6.checked) // Cyberlimb
	{
		if (f.c_6_r[0].checked)
			ability_score[strength]++
		else if (f.c_6_r[1].checked)
			ability_score[strength] += 2
		else if (f.c_6_r[2].checked)
			ability_score[strength] += 3
	}
	if (f.c_9.checked) // MusclePlus
	{
		if (f.c_9_r[0].checked)
			ability_score[strength]++
		else if (f.c_9_r[1].checked)
			ability_score[strength] += 2
		else if (f.c_9_r[2].checked)
			ability_score[strength] += 3
	}
	if (have_mutation(9))       // Improved CON
		ability_score[constitution]++
	else if (have_mutation(27)) // Enhanced CON
		ability_score[constitution] += 2
	else if (have_mutation(49)) // Hyper CON
		ability_score[constitution] += 3
	if (have_mutation(10))      // Improved DEX
		ability_score[dexterity]++
	else if (have_mutation(28)) // Enhanced DEX
		ability_score[dexterity] += 2
	else if (have_mutation(50)) // Hyper DEX
		ability_score[dexterity] += 3
	if (have_mutation(14))      // Improved INT
		ability_score[intelligence]++
	else if (have_mutation(32)) // Enhanced INT
		ability_score[intelligence] += 2
	else if (have_mutation(54)) // Hyper INT
		ability_score[intelligence] += 3
	if (have_mutation(15))      // Improved PER
		ability_score[personality]++
	else if (have_mutation(33)) // Enhanced PER
		ability_score[personality] += 2
	else if (have_mutation(56)) // Hyper PER
		ability_score[personality] += 3
	if (have_mutation(18))      // Improved STR
		ability_score[strength]++
	else if (have_mutation(36)) // Enhanced STR
		ability_score[strength] += 2
	else if (have_mutation(59)) // Hyper STR
		ability_score[strength] += 3
	if (have_mutation(19))      // Improved WIL
		ability_score[will]++
	else if (have_mutation(37)) // Enhanced WIL
		ability_score[will] += 2
	else if (have_mutation(60)) // Hyper WIL
		ability_score[will] += 3
	if (have_mutation(45)) // Dermal Plating
		ability_score[dexterity]--
	if (have_mutation(48)) // Flight
	{
		ability_score[strength]--
		ability_score[constitution] -= 2
		ability_score[dexterity]++
	}
	for (var x=0; x<reduced.length; x++)
		if (have_mutation(reduced[x]))
		{
			for (i=0; i<ability.length; i++)
				if (get_mutation_value(reduced[x]) == ability[i].substring(0,3).toUpperCase())
				{
					ability_score[i] -= (x+1)
					break
				}
			break
		}
	for (var x=5; x<17; x++)
		if (have_benefit(x))
		{
			var a = (x-5) % ability.length
			if (ability_score[a] < ability_score_limit[f.i_2.selectedIndex][2*a+1])
				ability_score[a]++
		}
}
function get_cookies()
{
	for (var x=0; x<cookiee.length; x++)
		cookiee[x] = get_cookie(cookies[x])
}
function chargen()
{
	get_cookies()
	var f = parent.frames[0].document.forms[0]
	var species    = get_species(f)
	var profession = f.i_4.options[f.i_4.selectedIndex].value
	adjust_ability_score(f, species, profession)
	if (f.i_48.checked)
	{
		font  = 'Boost SSi'
		tfont = 'd'
	}
	else
	{
		font  = ''
		tfont = 'h'
	}
	var h = ''
	h += '<html>\n'
	h += '<head>\n'
	h += '<title>ALTERNITY Science Fiction Roleplaying Game Hero Sheet</title>\n'
	h += '</head>\n'
	h += '<body bgcolor="white">\n'
	if (font == '')
		h += '<h2>A<font size="-1">LTERNITY</font> Science Fiction Roleplaying Game Hero Sheet</font></h2>\n'
	else
		h += '<h3><font face="Alternity" size="+2">Alternity</font> <font face="' + font + '">Science Fiction Roleplaying Game Hero Sheet</font></h3>\n'
	h += '<hr>\n'
	h += '<table>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Hero\'s Name</font></t' + tfont + '>\n'
	h += '<td colspan=3><u>' + f.i_0.value + '</u></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Player\'s Name</font></t' + tfont + '>\n'
	h += '<td colspan=8><u>' + f.i_1.value + '</u></td>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Species</font></t' + tfont + '>\n'
	h += '<td><u>' + species + '</u></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Gender</font></t' + tfont + '>\n'
	h += '<td><u>' + f.i_3.options[f.i_3.selectedIndex].value + '</u></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Profession</font></t' + tfont + '>\n'
	h += '<td><u>' + f.i_4.options[f.i_4.selectedIndex].text + '</u></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Career</font></t' + tfont + '>\n'
	h += '<td colspan=6><u>' + f.i_5.value + '</u></td>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Attributes</font></t' + tfont + '>\n'
	h += '<td colspan=5><u>' + f.i_6.value + '</u></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Last Resorts</font></t' + tfont + '>\n'
	var a = new Array(2)
	a = get_last_resorts_info(profession)
	last_resorts = a[0]
	last_resort_cost = a[1]
	h += '<td><u>' + last_resorts + '</u></td>\n'
	token = cookiee[info].split('\t')
	for (var x=0; x<5; x++)
	{
		h += '<td bgcolor="'
		if (x < last_resorts-parseInt(token[51]))
			h += '#CCCCCC'
		else
			h += 'black'
		h += '" width=10><br></td>\n'
	}
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Setting</font></t' + tfont + '>\n'
	h += '<td><u>' + f.i_7.value + '</u></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Gamemaster</font></t' + tfont + '>\n'
	h += '<td colspan=3><u>' + f.i_8.value + '</u></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Last Resort Cost</font></t' + tfont + '>\n'
	h += '<td colspan=6><u>' + last_resort_cost + '</u></td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	h += '<table border>\n'
	h += '<tr>\n'
	h += '<td rowspan=2>\n'
	h += '<table>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font color="green" face="' + font + '">ABILITY</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font color="green" face="' + font + '">Score</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font color="green" face="' + font + '">Untrained</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font color="green" face="' + font + '">Res. Mod.</font></t' + tfont + '>\n'
	h += '</tr>\n'
	var has_rm = '0134'
	for (var x=0; x<ability.length; x++)
	{
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<t' + tfont + ' align=left><font face="' + font + '">' + ability[x] + '</font></t' + tfont + '>\n'
		h += '<td align=center>' + ability_score[x] + '</td>\n'
		h += '<td align=center>' + Math.floor(ability_score[x] / 2) + '</td>\n'
		if (has_rm.indexOf(x) == -1)
			h += '<td align=center bgcolor="white"><br></td>\n'
		else
		{
			var rm = resistance_modifier(f, x)
			h += '<td align=center>' + (rm > 0 ? '+' : '') + rm
			var a = new Array(26, 29, 2, 3)
			for (var i=0; i<2; i++)
				if ((x == strength || x == dexterity) && eval('f.a_' + a[i] + '.checked'))
					h += ' (' + ((rm+a[i+2]) > 0 ? '+' : '') + (rm+a[i+2]) + ' against attacks with ' + armor[a[i]][0] + ')'
			h += '</td>\n'
		}
		h += '</tr>\n'
	}
	h += '</table>\n'
	h += '</td>\n'
	h += '<td>\n'
	h += '<table width="100%">\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=4><font color="green" face="' + font + '">ACTION CHECK SCORE</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=center width="25%"><font face="' + font + '">Marginal</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="25%"><font face="' + font + '">Ordinary</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="25%"><font face="' + font + '">Good</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="25%"><font face="' + font + '">Amazing</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	var action_check_score = Math.floor((ability_score[dexterity] + ability_score[intelligence]) / 2)
	if (profession == 'C')
		action_check_score += 3
	else if (profession == 'D')
		action_check_score++
	else if (profession == 'F')
		action_check_score += 2
	else if (profession == 'T')
		action_check_score++
	else if (profession == 'M')
		action_check_score++
	if (f.f_17.checked)
		action_check_score--
	//action_check_score += adjust_armor(f)
	if (have_mutation(16))      // Improved Reflexes
		action_check_score++
	else if (have_mutation(34)) // Enhanced Reflexes
		action_check_score += 2
	else if (have_mutation(57)) // Hyper Reflexes
		action_check_score += 3
	else if (have_mutation(86)) // Slow Reflexes
		action_check_score--
	if (have_benefit(1))        // Action Check Increase
		action_check_score++
	if (have_benefit(2))        // Action Check Increase
		action_check_score++
	if (have_benefit(3))        // Action Check Increase
		action_check_score++
	h += '<td align=center>' + (action_check_score+1) + '+ </td>\n'
	h += '<td align=center>' + action_check_score + '</td>\n'
	h += '<td align=center>' + Math.floor(action_check_score/2) + '</td>\n'
	h += '<td align=center>' + Math.floor(action_check_score/4) + '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	var die = new Array('-d6','-d4','+d0')
	var index = 2
	if (species == 'T\'sa')
		index = 1
	if (have_benefit(0)) // Action Check Bonus
		index--
	h += '<t' + tfont + ' align=left><font color="green" face="' + font + '">DIE</font> ' + die[index] + '</t' + tfont + '>\n'
	actions_per_round = Math.floor((ability_score[constitution]+ability_score[will]) / 8)
	if (have_benefit(4)) // Extra Action (yeah, baby!)
		actions_per_round++
	h += '<t' + tfont + ' align=right colspan=3><font color="green" face="' + font + '">ACTIONS PER ROUND</font> ' + actions_per_round + '</t' + tfont + '>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '</td>\n'
	h += '<tr>\n'
	h += '<td>\n'
	h += '<table width="100%">\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	var cmr = set_combat_movement_rates()
	h += '<t' + tfont + ' align=left colspan=8><font color="green" face="' + font + '">COMBAT MOVEMENT RATES</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Sprint</font></t' + tfont + '>\n'
	h += '<td align=right>' + (combat_movement_rate[cmr][0]+adjust_sprint(f)) + '</td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Run</font></t' + tfont + '>\n'
	h += '<td align=right>' + (combat_movement_rate[cmr][1]+adjust_run(f)) + '</td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Walk</font></t' + tfont + '>\n'
	h += '<td align=right>' + combat_movement_rate[cmr][2] + '</td>\n'
	h += '<td align=left colspan=2 bgcolor="white"><br></td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Easy Swim</font></t' + tfont + '>\n'
	h += '<td align=right>' + (combat_movement_rate[cmr][3]+adjust_swim(f)) + '</td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Swim</font></t' + tfont + '>\n'
	h += '<td align=right>' + (combat_movement_rate[cmr][4]+adjust_swim(f)) + '</td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Glide</font></t' + tfont + '>\n'
	h += '<td align=right>' + (combat_movement_rate[cmr][5]+adjust_glide(f)) + '</td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Fly</font></t' + tfont + '>\n'
	h += '<td align=right>' + (combat_movement_rate[cmr][6]+adjust_fly(f)) + '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	var durability = ability_score[constitution]
	if (species == 'Weren')
		durability = Math.floor(ability_score[constitution] * 1.5)
	var stun  = durability
	var wound = durability
	var fatigue = Math.ceil(durability / 2)
	var mortal  = Math.ceil(durability / 2)
	if (f.p_20.checked) // Vigor
	{
		if (f.p_20_r_0.checked)
			stun++
		if (f.p_20_r_1.checked)
			wound++
		if (f.p_20_r_2.checked)
		{
			fatigue++
			mortal++
		}
	}
	if (f.c_18.checked) // CF Skinweave
	{
		if (f.c_18_r[0].checked)
			stun += 2
		else if (f.c_18_r[1].checked)
		{
			stun += 2
			wound++
		}
		else if (f.c_18_r[2].checked)
		{
			stun += 2
			wound++
			mortal++
		}
	}
	if (f.c_22.checked) // Exoskeleton
	{
		if (f.c_22_r[0].checked)
			stun += 2
		else if (f.c_22_r[1].checked)
		{
			stun += 2
			wound += 2
		}
		else if (f.c_22_r[2].checked)
		{
			stun += 2
			wound += 2
			mortal += 2
		}
	}
	if (have_mutation(11))      // Improved Durability
		stun += 3
	else if (have_mutation(29)) // Enhanced Durability
		wound += 3
	else if (have_mutation(51)) // Hyper Durability
		mortal += 3
	if (have_benefit(17)) // Fatigue Rating Increase
		fatigue++
	if (have_benefit(18)) // Mortal Rating Increase
		mortal++
	if (have_benefit(19)) // Stun Rating Increase
		stun++
	if (have_benefit(20)) // Stun Rating Increase
		stun++
	if (have_benefit(21)) // Stun Rating Increase
		stun++
	if (have_benefit(22)) // Wound Rating Increase
		wound++
	if (have_benefit(23)) // Wound Rating Increase
		wound++
	h += '<table border>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=' + (2+Math.max(20,Math.max(stun,wound))+2+Math.max(10,Math.max(fatigue,mortal))) + '><font color="green" face="' + font + '">DURABILITY</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Stun</font></t' + tfont + '>\n'
	h += '<td align=right>' + stun + '</td>\n'
	for (var x=0; x<stun; x++)
		h += '<td bgcolor="white" width=10><br></td>\n'
	for (var x=stun; x<Math.max(20,Math.max(stun,wound)); x++)
		h += '<td bgcolor="black" width=10><br></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Fatigue</font></t' + tfont + '>\n'
	h += '<td align=right>' + fatigue + '</td>\n'
	for (var x=0; x<fatigue; x++)
		h += '<td bgcolor="white" width=10><br></td>\n'
	for (var x=fatigue; x<Math.max(10,Math.max(fatigue,mortal)); x++)
		h += '<td bgcolor="black" width=10><br></td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Wound</font></t' + tfont + '>\n'
	h += '<td align=right>' + wound + '</td>\n'
	for (var x=0; x<wound; x++)
		h += '<td bgcolor="white" width=10><br></td>\n'
	for (var x=wound; x<Math.max(20,Math.max(stun,wound)); x++)
		h += '<td bgcolor="black" width=10><br></td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Mortal</font></t' + tfont + '>\n'
	h += '<td align=right>' + mortal + '</td>\n'
	for (var x=0; x<mortal; x++)
		h += '<td bgcolor="white" width=10><br></td>\n'
	for (var x=mortal; x<Math.max(10,Math.max(fatigue,mortal)); x++)
		h += '<td bgcolor="black" width=10><br></td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	h += '<table border>\n'
	h += '<tr>\n'
	h += '<td>\n'
	var checked = new Array(armor.length)
	var armor_selected = 0
	if (species == 'T\'sa')
	{
		checked[0] = true
		armor_selected++
	}
	else
		checked[0] = false
	for (var x=1; x<armor.length; x++)
	{
		checked[x] = eval('f.a_' + x + '.checked')
		if (checked[x])
			armor_selected++
	}
	if (cookiee[custom].length > 1)
	{
		var token = cookiee[custom].split('\t')
		var x = 1
		while (x < token.length-1)
		{
			if (token[x] == 'a')
				armor_selected++
			x += get_length(token[x])
		}
	}
	for (var x=3; x<6; x++)
		if (eval('f.c_' + x + '.checked'))
		{
			armor_selected++
			break
		}
	var mutant_armor = new Array(8,25,45,46,47)
	for (var x=0; x<mutant_armor.length; x++)
		if (have_mutation(mutant_armor[x]))
			armor_selected++
	var armor_data = new Array()
	var ad_index = 0
	h += '<table width="100%">\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left valign=top rowspan=' + (armor_selected==0?2:2*armor_selected) + '><font color="green" face="' + font + '">ARMOR</font></t' + tfont + '>\n'
	var armor_index = 0
	var have_armor = false
	if (armor_selected == 0)
	{
		h += '<th align=left colspan=3><br></th>\n'
		h += '</tr>\n'
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<t' + tfont + ' align=right width=75> <font face="' + font + '">(LI)</font></t' + tfont + '>\n'
		h += '<t' + tfont + ' align=right width=75> <font face="' + font + '">(HI)</font></t' + tfont + '>\n'
		h += '<t' + tfont + ' align=right width=75> <font face="' + font + '">(En)</font></t' + tfont + '>\n'
		h += '</tr>\n'
	}
	else
		for (armor_index=0; armor_index<armor.length; armor_index++)
			if (armor[armor_index][1].length > 0 && checked[armor_index])
			{
				h += '<th align=left colspan=3>' + armor[armor_index][0] + '</th>\n'
				h += '</tr>\n'
				h += '<tr bgcolor="#CCCCCC">\n'
				h += '<t' + tfont + ' align=right width=75>' + armor[armor_index][1] + ' <font face="' + font + '">(LI)</font></t' + tfont + '>\n'
				h += '<t' + tfont + ' align=right width=75>' + armor[armor_index][2] + ' <font face="' + font + '">(HI)</font></t' + tfont + '>\n'
				h += '<t' + tfont + ' align=right width=75>' + armor[armor_index][3] + ' <font face="' + font + '">(En)</font></t' + tfont + '>\n'
				h += '</tr>\n'
				have_armor = true
				armor_data[ad_index++] = new Array(
						armor[armor_index][0],armor[armor_index][5],armor[armor_index][4],armor[armor_index][6],
						armor[armor_index][1],armor[armor_index][2],armor[armor_index][3],
						armor[armor_index][7],armor[armor_index][8],armor[armor_index][9],armor[armor_index][10])
				break
			}
	for (var x=armor_index+1; x<armor.length; x++)
		if (armor[x][1].length > 0 && checked[x])
			{
				h += '<tr bgcolor="#CCCCCC">\n'
				h += '<th align=left colspan=3>' + armor[x][0] + '</th>\n'
				h += '</tr>\n'
				h += '<tr bgcolor="#CCCCCC">\n'
				h += '<t' + tfont + ' align=right width=75>' + armor[x][1] + ' <font face="' + font + '">(LI)</font></t' + tfont + '>\n'
				h += '<t' + tfont + ' align=right width=75>' + armor[x][2] + ' <font face="' + font + '">(HI)</font></t' + tfont + '>\n'
				h += '<t' + tfont + ' align=right width=75>' + armor[x][3] + ' <font face="' + font + '">(En)</font></t' + tfont + '>\n'
				h += '</tr>\n'
				have_armor = true
				armor_data[ad_index++] = new Array(
						armor[x][0],armor[x][5],armor[x][4],armor[x][6],
						armor[x][1],armor[x][2],armor[x][3],
						armor[x][7],armor[x][8],armor[x][9],armor[x][10])
				break
			}
	if (cookiee[custom].length > 1)
	{
		var token = cookiee[custom].split('\t')
		var x = 1
		while (x < token.length-1)
		{
			if (token[x] == 'a')
			{
				if (have_armor)
					h += '<tr bgcolor="#CCCCCC">\n'
				have_armor = true
				h += '<th align=left colspan=3>' + format_table_data(token[x+1]) + '</th>\n'
				h += '</tr>\n'
				h += '<tr bgcolor="#CCCCCC">\n'
				h += '<t' + tfont + ' align=right width=75>' + token[x+5] + ' <font face="' + font + '">(LI)</font></t' + tfont + '>\n'
				h += '<t' + tfont + ' align=right width=75>' + token[x+6] + ' <font face="' + font + '">(HI)</font></t' + tfont + '>\n'
				h += '<t' + tfont + ' align=right width=75>' + token[x+7] + ' <font face="' + font + '">(En)</font></t' + tfont + '>\n'
				h += '</tr>\n'
				armor_data[ad_index++] = new Array(
						format_table_data(token[x+1]),token[x+2],token[x+3],token[x+4].charAt(0),
						token[x+5],token[x+6],token[x+7],
						token[x+8],token[x+9],token[x+10],token[x+11])
			}
			x += get_length(token[x])
		}
	}
	for (x=3; x<6; x++)
		if (eval('f.c_' + x + '.checked'))
		{
			if (have_armor)
				h += '<tr bgcolor="#CCCCCC">\n'
			have_armor = true
			h += '<th align=left colspan=3>' + cyber[x][0] + '</th>\n'
			h += '</tr>\n'
			h += '<tr bgcolor="#CCCCCC">\n'
			var aLI = (x==3?'d4'  :(x==4?'d6'  :'d8+1'))
			var aHI = (x==3?'d4'  :(x==4?'d4+1':'d6+1'))
			var aEn = (x==3?'d4-1':(x==4?'d4+1':'d6+1'))
			h += '<t' + tfont + ' align=right width=75>' + aLI + ' <font face="' + font + '">(LI)</font></t' + tfont + '>\n'
			h += '<t' + tfont + ' align=right width=75>' + aHI + ' <font face="' + font + '">(HI)</font></t' + tfont + '>\n'
			h += '<t' + tfont + ' align=right width=75>' + aEn + ' <font face="' + font + '">(En)</font></t' + tfont + '>\n'
			h += '</tr>\n'
			armor_data[ad_index++] = new Array(
				cyber[x][0],'','',(x==3?'O':(x==4?'G':'A')),
				aLI,aHI,aEn,
				'',cyber[x][1],'',cyber[x][x])
			break
		}
	for (var x=0; x<mutant_armor.length; x++)
		if (have_mutation(mutant_armor[x]))
		{
			if (have_armor)
				h += '<tr bgcolor="#CCCCCC">\n'
			have_armor = true
			h += '<th align=left colspan=3>' + mutation[mutant_armor[x]][3] + ' Mutation</th>\n'
			h += '</tr>\n'
			h += '<tr bgcolor="#CCCCCC">\n'
			var aLI = (x==0?'d4+1':(x==1?'d6+1':(x==2?'d6+2':(x==3?'0':'0'))))
			var aHI = (x==0?'d4'  :(x==1?'d4+1':(x==2?'d6+1':(x==3?'0':'0'))))
			var aEn = (x==0?'d4-1':(x==1?'d4'  :(x==2?'d6+1':(x==3?'2d4':'d4+1'))))
			h += '<t' + tfont + ' align=right width=75>' + aLI + ' <font face="' + font + '">(LI)</font></t' + tfont + '>\n'
			h += '<t' + tfont + ' align=right width=75>' + aHI + ' <font face="' + font + '">(HI)</font></t' + tfont + '>\n'
			h += '<t' + tfont + ' align=right width=75>' + aEn + ' <font face="' + font + '">(En)</font></t' + tfont + '>\n'
			h += '</tr>\n'
			armor_data[ad_index++] = new Array(
				mutation[mutant_armor[x]][3]+' Mutation','','',(x==0?'O':(x==1?'G':'A')),
				aLI,aHI,aEn,
				'','','','')
		}
	h += '</tr>\n'
	h += '</table>\n'
	h += '</td>\n'
	h += '<td rowspan=2 valign=top>\n'
	h += '<table>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=6><font color="green" face="' + font + '">PERSONAL DATA</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Age</font></t' + tfont + '>\n'
	h += '<td width=40>' + format_table_data(f.i_19.value) + '</td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Height</font></t' + tfont + '>\n'
	h += '<td width=40>' + format_table_data(f.i_20.value) + '</td>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Weight</font></t' + tfont + '>\n'
	h += '<td width=40>' + format_table_data(f.i_21.value) + '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=2><font face="' + font + '">Appearance</font></t' + tfont + '>\n'
	h += '<td colspan=4>' + format_table_data(f.i_22.value) + '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=2><font face="' + font + '">Allegiance</font></t' + tfont + '>\n'
	h += '<td colspan=4>' + format_table_data(f.i_23.value) + '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=2><font face="' + font + '">Social Status</font></t' + tfont + '>\n'
	h += '<td colspan=4>' + format_table_data(f.i_24.value) + '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left valign=top colspan=2><font face="' + font + '">Contacts</font></t' + tfont + '>\n'
	h += '<td colspan=4>' + format_table_data(f.i_25.value) + '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left valign=top colspan=2><font face="' + font + '">Enemies</font></t' + tfont + '>\n'
	h += '<td colspan=4>' + format_table_data(f.i_26.value) + '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=2><font face="' + font + '">Wealth</font></t' + tfont + '>\n'
	h += '<td colspan=4>' + format_table_data(f.i_27.value) + '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<td>\n'
	h += '<table width="100%">\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=2><font color="green" face="' + font + '">GAME DATA</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left valign=top><font face="' + font + '">Special Abilities</font></t' + tfont + '>\n'
	h += '<td>'
	if (profession == 'C')
	{
		h += 'Situation bonus'
		if (f.i_10.selectedIndex > 0)
		{
			var x = cs_sit_bonus[f.i_10.selectedIndex][0].indexOf('-')
			h += ': <i>' + cs_sit_bonus[f.i_10.selectedIndex][0].substring(x+1) + '</i>'
		}
		h += '\n'
		h += '<br>\n'
	}
	else if (profession == 'D')
	{
		h += 'Contacts or Resources\n'
		h += '<br>\n'
		h += 'Secondary Profession'
		if (f.i_11.selectedIndex > 0)
			h += ': ' + sec_profession[f.i_11.selectedIndex]
		h += '\n'
		h += '<br>\n'
	}
	else if (profession == 'F')
	{
		h += 'Resistance Bonus'
		if (f.i_12.selectedIndex > 0)
			h += ': ' + resistance_bonus[f.i_12.selectedIndex]
		h += '\n'
		h += '<br>\n'
		h += 'Last Resort Bonus\n'
		h += '<br>\n'
	}
	else if (profession == 'T')
	{
		h += 'Accelerated Learning\n'
		h += '<br>\n'
	}
	if (species == 'Fraal')
	{
		h += 'Psionic Powers\n'
	}
	else if (species == 'Mechalus')
	{
		h += 'Computer Operation Bonus: -1 step\n'
		h += '<br>\n'
		h += 'Hacking Bonus: -1 step\n'
		h += '<br>\n'
		h += 'Cybernetic Enhancements\n'
	}
	else if (species == 'Sesheyan')
	{
		h += 'Flight\n'
		h += '<br>\n'
		h += 'Zero-G Training: Rank 1\n'
		h += '<br>\n'
		h += 'Falling: no damage\n'
		h += '<br>\n'
		h += 'Night Vision\n'
		h += '<br>\n'
		h += 'Light Sensitivity\n'
	}
	else if (species == 'T\'sa')
	{
		h += 'Action Check Bonus: -1 step\n'
		h += '<br>\n'
		h += 'Juryrig Bonus: -1 step\n'
		h += '<br>\n'
		h += 'Body Armor: d4+1/d4/d4-1\n'
	}
	else if (species == 'Weren')
	{
		h += 'Superior Durability: (dur = 1.5 x con)\n'
		h += '<br>\n'
		h += 'Natural Weapon: Claws: d4w/d4+2w/d4m\n'
		h += '<br>\n'
		h += 'Camouflage\n'
		h += '<br>\n'
		h += 'Primitive Culture\n'
	}
	h += '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left valign=top><font face="' + font + '">Perks</font></t' + tfont + '>\n'
	h += '<td>'
	var havePerks = false
	for (var x=0; x<perk.length; x++)
		if (eval('f.p_' + x + '.checked'))
		{
			havePerks = true
			h += perk[x][0] + '<br>&nbsp;&nbsp;'
			if (x == 12)
				h += eval('f.p_' + x + '_r[f.p_' + x + '_r.selectedIndex].value')
			else
				h += perk[x][2]
			h += ', Cost: '
			var token = perk[x][1].split('/')
			if (token.length == 1)
				h += perk[x][1]
			else if (x == 20)
			{
				var sum = 0
				for (var i=0; i<3; i++)
					if (eval('f.p_' + x + '_r_' + i + '.checked'))
						sum += parseInt(token[i])
				h += sum
			}
			else
			{
				var len = eval('f.p_' + x + '_r.length')
				for (var i=0; i<len; i++)
					if (eval('f.p_' + x + '_r[' + i + '].checked'))
					{
						h += token[i]
						break
					}
			}
			h += '<br>'
		}
	if (!havePerks)
		h += '<br>'
	h += '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left valign=top><font face="' + font + '">Flaws</font></t' + tfont + '>\n'
	h += '<td>'
	var haveFlaws = false
	for (var x=0; x<flaw.length; x++)
		if (eval('f.f_' + x + '.checked'))
		{
			haveFlaws = true
			h += flaw[x][0] + '<br>'
			h += '&nbsp;&nbsp;' + flaw[x][2] + ', +SP: '
			var token = flaw[x][1].split('/')
			if (token.length == 1)
				h += flaw[x][1]
			else
			{
				var len = eval('f.f_' + x + '_r.length')
				for (var i=0; i<len; i++)
					if (eval('f.f_' + x + '_r[' + i + '].checked'))
					{
						h += token[i]
						break
					}
			}
			h += '<br>'
		}
	if (!haveFlaws)
		h += '<br>'
	h += '</td>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left valign=top><font face="' + font + '">Other</font></t' + tfont + '>\n'
	h += '<td>' + format_table_data(f.i_28.value) + '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	h += '<table border>\n'
	h += '<tr>\n'
	h += '<td>\n'
	h += '<table>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font color="green" face="' + font + '">ATTACK FORMS</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Score</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Base Die</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Base Die (w/RM)</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Type</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Range (S/M/L)</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Damage</font></t' + tfont + '>\n'
	h += '</tr>\n'
	var rm = resistance_modifier(f, strength)
	var weapons_selected = 0
	for (var x=0; x<weapon.length; x++)
	{
		if (weapon[x][1].charAt(0) == ' ')
			continue
		var checked = ((x != 100 && x != 101) ? eval('f.w_' + x + '.checked') : false)
		if (checked || ((x == 100 || x == 101) && skill_value(weapon[x][1]) > 0))
		{
			weapons_selected++
			h += '<tr bgcolor="#CCCCCC">\n'
			h += '<th align=left>' + weapon[x][0] + '</th>\n'
			h += weapon_score_base_die(f, weapon[x][0], weapon[x][1], weapon[x][3], weapon[x][6], false)
			h += '<td align=center nowrap>' + weapon[x][2] + '</td>\n'
			h += '<td align=center nowrap>' + weapon[x][3] + '</td>\n'
			if ((x == 4 || x == 100 || x == 101) && species == 'Weren')
				h += '<td align=center nowrap>' + modify_damage(f, 'd4w/d4+2w/d4m', rm, x)  + '</td>\n'
			else if (weapon[x][5].substring(0,8) == 'Unarmed-' ||
					 weapon[x][5].substring(0,6) == 'Melee-' ||
					 weapon[x][5] == 'Athl-<i>throw</i>' ||
					 weapon[x][5] == 'Acro-<i>defensive</i>')
			{
				if (x != 100 && x != 101 && weapon[x][5].substring(0,8) == 'Unarmed-' && skill_value('s_0_4_0') >= 8)
					h += '<td align=center nowrap>' + modify_damage(f, 'd6s/d6+2s/d4w', rm, x)  + '</td>\n'
				else if (x == 100 && skill_value('s_0_4_1') >= 7)
					h += '<td align=center nowrap>' + modify_damage(f, 'd6+2s/d4w/d4+2w', rm, x)  + '</td>\n'
				else
					h += '<td align=center nowrap>' + modify_damage(f, weapon[x][4], rm, x) + '</td>\n'
			}
			else
				h += '<td align=center nowrap>' + weapon[x][4] + '</td>\n'
			h += '</tr>\n'
		}
	}
	if (cookiee[custom].length > 1)
	{
		var token = cookiee[custom].split('\t')
		var x = 1
		while (x < token.length-1)
		{
			if (token[x] == 'w')
			{
				weapons_selected++
				for (var i=x+2; i<x+get_length(token[x]); i++)
					if (token[i] == '')
						token[i] = '<br>'
				h += '<tr bgcolor="#CCCCCC">\n'
				h += '<th align=left>' + format_table_data(token[x+1]) + '</th>\n'
				var sk = token[x+2].split('-')
				var i = 0
				var j = 0
				var found = false
				for (i=0; i<broad.length; i++)
				{
					var len = broad[i].length
					for (j=0; j<len; j++)
					{
						var tkn = broad[i][j].split('|')
						if (tkn[0].indexOf(sk[0]) != -1)
							for (var k=0; k<skill[i][j].length; k++)
							{
								var tkn = skill[i][j][k].split('|')
								if (tkn[0].toUpperCase().indexOf(sk[1].toUpperCase()) == 0)
								{
									h += weapon_score_base_die(f, token[x+1], 's_' + i + '_' + j + '_' + k, token[x+5], token[x+3], false)
									i = broad.length+1
									j = len
									found = true
									break
								}
							}
					}
				}
				if (!found)
				{
					h += '<td><br></td>\n'
					h += '<td><br></td>\n'
				}
				h += '<td align=center nowrap>' + token[x+6] + '</td>\n'
				h += '<td align=center nowrap>' + token[x+5] + '</td>\n'
				h += '<td align=center nowrap>' + token[x+7] + '</td>\n'
				h += '</tr>\n'
			}
			x += get_length(token[x])
		}
	}
	if (f.c_0.checked) // BattleKlaw
	{
		weapons_selected++
		var range = 'Personal'
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<th align=left>' + cyber[0][0] + '</th>\n'
		h += weapon_score_base_die(f, cyber[0][0], 's_0_4_0', range, '0', false)
		h += '<td align=center nowrap>LI/O</td>\n'
		h += '<td align=center nowrap>' + range + '</td>\n'
		if (f.c_0_r[0].checked)
			h += '<td align=center nowrap>d4w/d4+1w/d4+2w</td>\n'
		else if (f.c_0_r[1].checked)
			h += '<td align=center nowrap>d4+2w/d6+2w/d4m</td>\n'
		else if (f.c_0_r[2].checked)
			h += '<td align=center nowrap>d6+2w/d4m/d4+2m</td>\n'
		h += '</tr>\n'
	}
	if (have_mutation(24)) // Acid Touch
	{
		weapons_selected++
		var range = 'Personal'
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<th align=left>' + mutation[24][3] + ' Mutation</th>\n'
		h += weapon_score_base_die(f, mutation[24][3], 's_0_4_0', range, '0', true)
		h += '<td align=center nowrap>En/O</td>\n'
		h += '<td align=center nowrap>' + range + '</td>\n'
		h += '<td align=center nowrap>-d4w/d4s/d4w/d4+2w/d6+2w</td>\n'
		h += '</tr>\n'
	}
	if (have_mutation(26)) // Electric Aura
	{
		weapons_selected++
		var range = 'Personal'
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<th align=left>' + mutation[26][3] + ' Mutation</th>\n'
		h += weapon_score_base_die(f, mutation[26][3], 's_0_4_0', range, '0', true)
		h += '<td align=center nowrap>En/O</td>\n'
		h += '<td align=center nowrap>' + range  +'</td>\n'
		h += '<td align=center nowrap>-d4s/d4s/d4+2s/d8+2s/d4+1w</td>\n'
		h += '</tr>\n'
	}
	if (have_mutation(39)) // Natural Attack
	{
		weapons_selected++
		var range = 'Personal'
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<th align=left>' + mutation[39][3] + ' Mutation</th>\n'
		h += weapon_score_base_die(f, mutation[39][3], 's_0_4_0', range, '0', false)
		h += '<td align=center nowrap>LI/O</td>\n'
		h += '<td align=center nowrap>' + range + '</td>\n'
		var damage_adj = get_damage_adj(get_mutation_value(39))
		h += '<td align=center nowrap>' + modify_damage(f, 'd6+2s/d4w/d4+2w', resistance_modifier(f, strength)+damage_adj, 4) + '</td>\n'
		h += '</tr>\n'
	}
	else if (have_mutation(61)) // Improved Natural Attack
	{
		weapons_selected++
		var range = 'Personal'
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<th align=left>' + mutation[61][3] + ' Mutation</th>\n'
		h += weapon_score_base_die(f, mutation[61][3], 's_0_4_0', range, '0', false)
		h += '<td align=center nowrap>LI/O</td>\n'
		h += '<td align=center nowrap>' + range + '</td>\n'
		var damage_adj = get_damage_adj(get_mutation_value(61))
		h += '<td align=center nowrap>' + modify_damage(f, 'd4w/d4+2w/d4m', resistance_modifier(f, strength)+damage_adj, 4) + '</td>\n'
		h += '</tr>\n'
	}
	for (var x=weapons_selected; x<5; x++)
	{
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<th align=left><br></th>\n'
		h += '<td align=center nowrap>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>\n'
		h += '<td align=center nowrap><br></td>\n'
		h += '<td align=center nowrap>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>\n'
		h += '<td align=center nowrap><br></td>\n'
		h += '<td align=center nowrap>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>\n'
		h += '<td align=center nowrap>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>\n'
		h += '</tr>\n'
	}
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	h += '<table border>\n'
	h += '<caption><font face="' + font + '">SITUATION DIE STEPS SCALE</font></caption>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#00FF00"><font face="' + font + '">-d20</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#33FF33"><font face="' + font + '">-d12</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#66FF66"><font face="' + font + '">-d8</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#99FF99"><font face="' + font + '">-d6</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#CCFFCC"><font face="' + font + '">-d4</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#FFFFFF"><font face="' + font + '">+d0</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#FFCCCC"><font face="' + font + '">+d4</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#FF9999"><font face="' + font + '">+d6</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#FF6666"><font face="' + font + '">+d8</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#FF3333"><font face="' + font + '">+d12</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#FF0000"><font face="' + font + '">+d20</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#CC0000"><font face="' + font + '">+2d20</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width="7%" bgcolor="#990000"><font face="' + font + '">+3d20</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<td colspan=13>\n'
	h += '<table border=0 cellpadding=0 cellspacing=0 width="100%">\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left colspan=5><font face="' + font + '">BONUS</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=right colspan=7><font face="' + font + '">PENALTY</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	h += '<table>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font color="green" face="' + font + '">ACHIEVEMENT TRACK</font></t' + tfont + '>\n'
	skill_points_spent = get_skill_points_spent(f,profession)
	h += '<t' + tfont + ' align=left><font face="' + font + '">Skill Points Spent</font></t' + tfont + '>\n'
	h += '<td align=right width=30>' + skill_points_spent + '</td>\n'
	var a = new Array(2)
	a = get_broad_skills_and_skill_points_available(f,species,profession)
	broad_skills = a[0]
	skill_points_available = a[1]
	update_skill_points()
	h += '<t' + tfont + ' align=left><font face="' + font + '">Stored</font></t' + tfont + '>\n'
	h += '<td align=right width=30>' + (skill_points_available-skill_points_spent) + '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	if (broad_skills_selected > broad_skills)
		alert('You may only purchase ' + broad_skills + ' broad skills!\nPlease uncheck ' + (broad_skills_selected-broad_skills) + '.')
	h += '<table border>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	var token = cookiee[info].split('\t')
	var a_points = parseInt(token[49])
	var level = get_level(a_points)
	var leftover = get_leftover(a_points)
	for (var x=0; x<28; x++)
	{
		h += '<td width=20 bgcolor="'
		if (x < leftover)
			h += 'black'
		else
			h += 'white'
		h += '"><br></td>\n'
	}
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=5><font face="' + font + '">Hero\'s Level</font></t' + tfont + '>\n'
	for (var x=1; x<=23; x++)
	{
		h += '<td align=center'
		if (level == x)
			h += ' bgcolor="black"'
		h += '><font face="' + font + '"'
		if (level == x)
			h += ' color="white"'
		h += '>' + x + '</font></td>\n'
	}
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	h += '<table border>\n'
	h += '<tr>\n'
	h += '<td>\n'
	h += '<table>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left colspan=8><font color="green" face="' + font + '">WEAPON DATA</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Weapon</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Skill</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Acc</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Actions</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Clip Size</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Ammo Used</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Hide</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Mass</font></t' + tfont + '>\n'
	h += '</tr>\n'
	var weapons_selected = 0
	for (var x=0; x<weapon.length; x++)
	{
		if (weapon[x][1].charAt(0) == ' ')
			continue
		var checked = ((x != 100 && x != 101) ? eval('f.w_' + x + '.checked') : false)
		if (checked || ((x == 100 || x == 101) && skill_value(weapon[x][1]) > 0))
		{
			weapons_selected++
			h += '<tr bgcolor="#CCCCCC">\n'
			h += '<td>' + weapon[x][0] + '</td>\n'
			h += '<td>' + weapon[x][5] + '</td>\n'
			h += '<td align=center nowrap>' + weapon[x][6] + '</td>\n'
			h += '<td align=center nowrap>' + weapon[x][7] + '</td>\n'
			h += '<td align=center nowrap>' + weapon[x][8] + '</td>\n'
			h += '<td><br></td>\n'
			h += '<td align=center nowrap>' + weapon[x][9] + '</td>\n'
			h += '<td align=center nowrap>' + weapon[x][10] + '</td>\n'
			h += '</tr>\n'
		}
	}
	if (cookiee[custom].length > 1)
	{
		var token = cookiee[custom].split('\t')
		var x = 1
		while (x < token.length-1)
		{
			if (token[x] == 'w')
			{
				weapons_selected++
				for (var i=x+2; i<x+get_length(token[x]); i++)
					if (token[i] == '')
						token[i] = '<br>'
				h += '<tr bgcolor="#CCCCCC">\n'
				h += '<td>' + format_table_data(token[x+1]) + '</td>\n'
				var s = token[x+2]
				var tkn = s.split('-')
				if (tkn.length > 1)
					s = tkn[0] + '-<i>' + tkn[1] + '</i>'
				h += '<td>' + s + '</td>\n'
				h += '<td align=center nowrap>' + token[x+3] + '</td>\n'
				h += '<td align=center nowrap>' + token[x+8] + '</td>\n'
				h += '<td align=center nowrap>' + token[x+9] + '</td>\n'
				h += '<td><br></td>\n'
				h += '<td align=center nowrap>' + token[x+11] + '</td>\n'
				h += '<td align=center nowrap>' + token[x+12] + '</td>\n'
				h += '</tr>\n'
			}
			x += get_length(token[x])
		}
	}
	if (f.c_0.checked)
	{
		weapons_selected++
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<td>' + cyber[0][0] + '</td>\n'
		h += '<td>Unarmed-<i>brawl</i></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '</tr>\n'
	}
	var m = new Array(24,26,39,61)
	for (var x=0; x<=m.length; x++)
		if (have_mutation(m[x]))
		{
			weapons_selected++
			h += '<tr bgcolor="#CCCCCC">\n'
			h += '<td>' + mutation[m[x]][3] + ' Mutation</td>\n'
			h += '<td>Unarmed-<i>brawl</i></td>\n'
			h += '<td align=center nowrap><br></td>\n'
			h += '<td align=center nowrap><br></td>\n'
			h += '<td align=center nowrap><br></td>\n'
			h += '<td><br></td>\n'
			h += '<td align=center nowrap><br></td>\n'
			h += '<td align=center nowrap><br></td>\n'
			h += '</tr>\n'
		}
	for (var x=weapons_selected; x<5; x++)
	{
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<td width=100><br></td>\n'
		h += '<td width=100><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '<td><br></td>\n'
		h += '</tr>\n'
	}
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	h += '<table border>\n'
	h += '<tr>\n'
	h += '<td>\n'
	h += '<table>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	var cols = 11
	h += '<t' + tfont + ' align=left colspan=' + cols + '><font color="green" face="' + font + '">ARMOR DATA</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=left ><font face="' + font + '">Armor</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=left><font face="' + font + '">Skill</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">AP</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Type</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width=40><font face="' + font + '">LI</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width=40><font face="' + font + '">HI</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center width=40><font face="' + font + '">En</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Hide</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Mass</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Avail</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font face="' + font + '">Cost</font></t' + tfont + '>\n'
	h += '</tr>\n'
	if (armor_data.length == 0) {
		h += '<tr bgcolor="#CCCCCC">\n'
		for (var x=0; x<cols; x++) {
			h += '<td><br></td>\n'
		}
		h += '</tr>\n'
	}
	else {
		for (var x=0; x<armor_data.length; x++) {
			h += '<tr bgcolor="#CCCCCC">\n'
			for (var y=0; y<armor_data[x].length; y++) {
				var data = armor_data[x][y]
				if (y == 2 || y == 7) {
					if (data != 0 && data != '-') {
						data = '+' + data
					}
					else if (y == 2) {
						data = '0'
					}
					else {
						data = '-'
					}
				}
				if (data == '') {
					data = '<br>'
				}
				h += '<td align=center nowrap>' + data + '</td>\n'
			}
			h += '</tr>\n'
		}
	}
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	h += '<h4><font color="green" face="' + font + '">EQUIPMENT</font></h4>\n'
	h += '<ul>\n'
	for (var x=0; x<18; x++)
	{
		var value = eval('f.i_' + (29+x) + '.value')
		if (value.length > 0)
			h += '<li>' + value + '\n'
	}
	h += '</ul>\n'
	h += '<hr>\n'
	h += '<table>\n'
	h += '<tr>\n'
	h += '<h4><font color="green" face="' + font + '">NOTES</font></h4>\n'
	h += '<blockquote>\n'
	var s = ''
	var token = f.i_47.value.split('\n')
	for (var x=0; x<token.length; x++)
		s += token[x] + '<br>'
	h += s + '\n'
	h += '</blockquote>\n'
	h += '<hr>\n'
	h += '<form>\n'
	h += '<table>\n'
	var bold = 0
	for (var x=0; x<ability.length; x++)
	{
		var first = true
		for (var y=0; y<skill[x].length; y++)
		{
			var checked = have_skill('s_' + x + '_' + y)
			if (checked)
			{
				if (first)
				{
					h += write_skill(ability[x].substring(0,3).toUpperCase())
					first = false
				}
				var token = broad[x][y].split('|')
				var ret = write_broad(token[0], ability_score[x])
				var retndx = ret.indexOf(',')
				bold += parseInt(ret.substring(0,retndx))
				h += ret.substring(retndx+1)
				for (var z=0; z<skill[x][y].length; z++)
				{
					var skill_id = 's_' + x + '_' + y + '_' + z
					var selectedIndex = skill_value(skill_id)
					if (selectedIndex == 0)
						continue
					var name = get_specialty_skill_name(x, y, z)
					var ret = write_specialty(skill_id, name, selectedIndex, ability_score[x], token[1])
					var retndx = ret.indexOf(',')
					bold += parseInt(ret.substring(0,retndx))
					h += ret.substring(retndx+1)
				}
			}
		}
	}
	if (species == 'Fraal')
	{
		if (cookiee[skills].indexOf('\ts_5_') == -1)
			h += write_skill(ability[5].substring(0,3).toUpperCase())
		var ret = write_broad('Telepathy', ability_score[5])
		var retndx = ret.indexOf(',')
		bold += parseInt(ret.substring(0,retndx))
		h += ret.substring(retndx+1)
	}
	if (bold > 0)
	{
		h += '<tr>\n'
		h += '<td colspan=7>(If the description\'s font is bold, the skill\'s impact has already been reflected in the character sheet.)</td>\n'
		h += '</tr>\n'
	}
	h += '</table>\n'
	h += '</form>\n'
	h += '<hr>\n'
	h += '<table border>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left bgcolor="#CCCCCC"><font color="green" face="' + font + '">CYBERTECH</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<td>\n'
	h += '<table border width="100%">\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	h += '<t' + tfont + ' align=center colspan=2><font face="' + font + '">Cyber gear installed</font></t' + tfont + '>\n'
	h += '</tr>\n'
	var installed = 0
	var size = 0
	var cost = new Array('Oridinary','Good','Amazing')
	for (var x=0; x<cyber.length; x++)
		if (eval('f.c_' + x + '.checked'))
		{
			if (installed % 2 == 0)
				h += '<tr bgcolor="#CCCCCC">\n'
			h += '<td width="50%">' + cyber[x][0] + ': '
			if (cyber[x][3] == '-' || cyber[x][4] == '-' || cyber[x][5] == '-')
			{
				for (var z=3; z<6; z++)
					if (cyber[x][z] != '-')
					{
						h += cost[z-3]
						break
					}
			}
			else
				for (var z=0; z<3; z++)
					if (eval('f.c_' + x + '_r[' + z + '].checked'))
					{
						h += cost[z]
						break
					}
			h += '</td>\n'
			if (!((x == 10 || x == 19 || x == 24) && species == 'Mechalus'))
				size += cyber[x][2]
			if (installed++ % 2 == 1)
				h += '</tr>\n'
		}
	var token = cookiee[custom].split('\t')
	var x = 1
	while (x < token.length-1)
	{
		if (token[x] == 'c')
		{
			if (installed % 2 == 0)
				h += '<tr bgcolor="#CCCCCC">\n'
			h += '<td width="50%">' + format_table_data(token[x+1] + ': ' + token[x+4]) + '</td>\n'
			size += parseInt(token[x+3]=='-'?0:token[x+3])
			if (installed++ %2 == 1)
				h += '</tr>\n'
		}
		x += get_length(token[x])
	}
	if (installed % 2 == 1)
	{
		h += '<td width="50%"><br></td>\n'
		h += '</tr>\n'
	}
	for (var x=Math.ceil(installed/2); x<4; x++)
	{
		h += '<tr bgcolor="#CCCCCC">\n'
		h += '<td width="50%"><br></td>\n'
		h += '<td width="50%"><br></td>\n'
		h += '</tr>\n'
	}
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<td align=center>\n'
	h += '<table border>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	var cyber_tolerance = get_cyber_tolerance(f)
	var first  = Math.floor(cyber_tolerance / 2)
	var second = Math.ceil (cyber_tolerance / 4)
	var third  = cyber_tolerance - first - second
	h += '<t' + tfont + ' align=center colspan=' + (first+1+second+1+third) + '><font face="' + font + '">Cyber tolerance</font> ' + first + ' / ' + second + ' / ' + third + '</t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	for (var x=0; x<first; x++)
		if (x < size)
			h += '<td bgcolor="black" width=10><br></td>\n'
		else
			h += '<td bgcolor="white" width=10><br></td>\n'
	h += '<td> / </td>\n'
	for (var x=0; x<second; x++)
		if (first+x < size)
			h += '<td bgcolor="black" width=10><br></td>\n'
		else
			h += '<td bgcolor="white" width=10><br></td>\n'
	h += '<td> / </td>\n'
	for (var x=0; x<third; x++)
		if (first+second+x < size)
			h += '<td bgcolor="black" width=10><br></td>\n'
		else
			h += '<td bgcolor="white" width=10><br></td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<td align=center>\n'
	h += '<table border>\n'
	h += '<tr bgcolor="#CCCCCC">\n'
	var cykosis_score = Math.ceil(ability_score[will] / 2)
	h += '<t' + tfont + ' align=left><font face="' + font + '">Cykosis</font></td><td>' + cykosis_score + '</t' + tfont + '>\n'
	for (var x=0; x<cykosis_score; x++)
		h += '<td bgcolor="white" width=10><br></td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '</td>\n'
	h += '</tr>\n'
	h += '</table>\n'
	h += '<hr>\n'
	if (species == 'Mutant')
		h += write_mutant_info()
	h += write_achievement_benefits()
	h += '<address>\n'
	h += 'HeroGen (an A<font size="-1">LTERNITY</font> Character Generator)\n'
	h += 'Copyright &copy; 1999-2003 Mike Heffner. All rights reserved.\n'
	h += '<br>\n'
	h += 'Version ' + version + '\n'
	h += '<p>\n'
	h += 'A<font size="-1">LTERNITY</font> is a registered trademark owned by TSR, Inc.\n'
	h += 'Copyright &copy; 1998 TSR, Inc. All rights reserved.\n'
	h += '</address>\n'
	h += '</body>\n'
	h += '</html>\n'
	parent.hero = h
	var d = parent.frames[1].document
	d.open()
	d.write(h)
	d.close()
	sum_attributes()
}
function write_achievement_benefits()
{
	var cookie = get_cookie('other')
	var token = cookie.split('\t')
	var h = ''
	var x = 1
	var benefits = 0
	while (x < token.length-1)
	{
			if (token[x].charAt(0) == 'b')
			{
				if (benefits++ == 0)
				{
					h += '<h4><font color="green" face="' + font + '">ACHIEVEMENT BENEFITS</font></h4>\n'
					h += '<ul>\n'
				}
				var tkn = token[x].split('_')
				h += '<li>' + achievement_benefit[tkn[1]][0] + '\n'
				x += 2
			}
			else if (token[x].charAt(0) == 'w' || token[x].charAt(0) == 'a')
				x++
			else if (token[x].charAt(0) == 'p' || token[x].charAt(0) == 'f' ||
					 token[x].charAt(0) == 'm' || token[x].charAt(0) == 'c')
				x += 2
			else
			{
				alert('Invalid type in "other" cookie: ' + token[x].charAt(0))
				x++
			}
	}
	if (benefits > 0)
	{
		h += '</ul>\n'
		h += '<hr>\n'
	}
	return(h)
}
function sum_attributes()
{
	var f = parent.frames[0].document.forms[0]
	var sum_attributes = 0
	for (x=0; x<ability.length; x++)
		sum_attributes += parseInt(eval('f.i_' + (abilities+x) + '.options[f.i_' + (abilities+x) + '.selectedIndex].text'))
	window.defaultStatus='You have allocated ' + sum_attributes + ' attribute points.'
	f.sum.value = sum_attributes
}
function get_specialty_skill_name(x, y, z)
{
	var token = skill[x][y][z].split('|')
	var name = token[0]
	var specific = name.indexOf("[specific]")
	if (specific > -1)
	{
		var userText = skill_text('s_' + x + '_' + y + '_' + z + '_t').substring(1)
		if (specific == 0)
			name = userText
		else
			name = name.substring(0,specific) + userText
	}
	return(name)
}
function get_level(a_points)
{
	var level = 1
	while (1)
		if (a_points < 5+level)
			return(level)
		else
			a_points -= (5+(level++))
}
function get_leftover(a_points)
{
	var level = 1
	while (1)
		if (a_points < 5+level)
			return(a_points)
		else
			a_points -= (5+(level++))
}
function get_mutation_value(m)
{
	var index = cookiee[other].indexOf('\tm_' + m + '\t')
	index = cookiee[other].indexOf('\t', index+1)
	var index2 = cookiee[other].indexOf('\t', index+1)
	return(cookiee[other].substring(index+1, index2))
}
function get_damage_adj(rb)
{
	var damage_adj = 0
	if (rb == 1)
		damage_adj = -2
	return(damage_adj)
}
function write_mutant_info()
{
	var cookie = get_cookie('info')
	var token = cookie.split('\t')
	var h = ''
	h += '<table border>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left bgcolor="#CCCCCC" colspan=4><font color="green" face="' + font + '">MUTATIONS</font></t' + tfont + '>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left bgcolor="#CCCCCC"><font face="' + font + '">Mutant Origin</font></t' + tfont + '>\n'
	h += '<td bgcolor="#CCCCCC">'
	if (token[mi] == 0)
		h += 'Engineered'
	else
		h += 'Natural'
	h += '</td>\n'
	h += '<t' + tfont + ' align=left bgcolor="#CCCCCC"><font face="' + font + '">Uniqueness</font></t' + tfont + '>\n'
	h += '<td bgcolor="#CCCCCC">'
	if (token[mi+1] == 0)
		h += 'Community'
	else
		h += 'Individual'
	h += '</td>\n'
	h += '</tr>\n'
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left bgcolor="#CCCCCC"><font face="' + font + '">Mutation Points</font></t' + tfont + '>\n'
	h += '<td align=center bgcolor="#CCCCCC">' + (parseInt(token[mi+2])+1) + '</td>\n'
	h += '<t' + tfont + ' align=left bgcolor="#CCCCCC"><font face="' + font + '">Drawback Points</font></t' + tfont + '>\n'
	h += '<td align=center bgcolor="#CCCCCC">' + (parseInt(token[mi+3])+1) + '</td>\n'
	h += '</tr>\n'
	var cost = new Array (1,2,4,1,2,4)
	var type = new Array('Ordinary Mutations','Good Mutations','Amazing Mutation','Slight Drawbacks','Moderate Drawbacks','Extreme Drawback')
	var cookie = get_cookie('other')
	for (var x=0; x<cost.length; x++)
	{
		var count = 0
		for (var y=0; y<mutation.length; y++)
			if (mutation[y][0] == Math.floor(x/3)+1 && mutation[y][1] == cost[x]) {
				var ret = check_mutation(cookie, x, y, type, count)
				var retndx = ret.indexOf(',')
				count = parseInt(ret.substring(0,retndx))
				h += ret.substring(retndx+1)
			}
	}
	h += '</table>\n'
	h += '<hr>\n'
	return(h)
}
function check_mutation(cookie, x, y, type, count)
{
	var h = ''
	if (cookie.indexOf('\tm_' + y + '\t') == -1)
		return(count + ',' + h)
	if (count == 0)
	{
		h += '<tr>\n'
		h += '<t' + tfont + ' align=left bgcolor="#CCCCCC" colspan=4><font face="' + font + '">' + type[x] + '</font></t' + tfont + '>\n'
		h += '</tr>\n'
	}
	h += '<tr>\n'
	var value = ''
	if (mutation[y][3] == 'Wild Mutation')
		value = ' (' + get_mutation_value(y) + ')'
	else
		for (var x=0; x<reduced.length; x++)
			if (y == reduced[x])
			{
				value = ' (' + get_mutation_value(y) + ')'
				break
			}
	for (var x=0; x<mutant_radio.length; x++)
		if (y == mutant_radio[x][0])
		{
			var s = get_mutation_value(y)
			var len = (mutant_radio[x].length - 1) / s.length
			for (var i=0; i<s.length; i++)
				value += '/' + mutant_radio[x][len*i+1+parseInt(s.charAt(i))]
			value = ' (' + value.substring(1) + ')'
		}
	h += '<td bgcolor="#CCCCCC" colspan=4>&nbsp;&nbsp;&nbsp;' + mutation[y][3] + value + '</td>\n'
	h += '</tr>\n'
	return((++count) + ',' + h)
}
function weapon_score_base_die(f, wName, wSkill, wRange, wAccuracy, touch)
{
	var h = ''
	var token = wSkill.split('_')
	checked = have_skill(token[0] + '_' + token[1] + '_' + token[2])
	var value = ability_score[token[1]]
	var selectedIndex = skill_value(wSkill)
	if (selectedIndex > 0)
		value += selectedIndex
	h += '<td align=center nowrap>'
	if (checked)
	{
		h += value + ' / ' + Math.floor(value / 2)
		h += ' / ' + Math.floor(value / 4) + '</td>\n'
	}
	else
	{
		h += Math.floor(value / 2) + ' / ' + Math.floor(value / 4)
		h += ' / ' + Math.floor(value / 8) + '</td>\n'
	}
	var die = new Array('-d12', '-d8', '-d6', '-d4', '+d0', '+d4', '+d6', '+d8', '+d12')
	var index = 2
	if (selectedIndex > 0 && cs_sit_bonus[f.i_10.selectedIndex][1] == wSkill)
		index = 3
	else if (selectedIndex > 0)
		index = 4
	else
		index = 5
	if (wSkill == 's_1_2_1' && selectedIndex >= 3)	// Ranged Weapons, Mod. - Rifle
		index--
	if (wSkill == 's_0_4_0' && touch)				// Unarmed Attack - Brawl
		index--
	if (f.i_52.checked) {
		if (wAccuracy.charAt(0) == '+') {
			wAccuracy = wAccuracy.substring(1)
		}
		index += parseInt(wAccuracy,10)
	}
	h += '<td align=center nowrap>' + die[index] + '</td>\n'
	if (wSkill == 's_0_1_2')						// Athletics - Throw
		h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index+1] + ' / ' + die[index+2] + '</td>\n'
	else if (wSkill == 's_0_2_0')					// Heavy Weapons - Direct fire
		h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index] + ' / ' + die[index+1] + '</td>\n'
	else if (wSkill == 's_0_2_1')					// Heavy Weapons - Indirect fire
		h += '<td align=center nowrap>' + die[index+2] + ' / ' + die[index-2] + ' / ' + die[index] + '</td>\n'
	else if (wSkill == 's_1_2_0')					// Ranged Weapons, Mod. - Pistol
	{
		if (selectedIndex < 5)
			h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index+1] + ' / ' + die[index+3] + '</td>\n'
		else
			h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index] + ' / ' + die[index+2] + '</td>\n'
	}
	else if (wSkill == 's_1_2_1')					// Ranged Weapons, Mod. - Rifle
	{
		if (selectedIndex < 3)
			h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index] + ' / ' + die[index+1] + '</td>\n'
		else
			h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index] + ' / ' + die[index] + '</td>\n'
	}
	else if (wSkill == 's_1_2_2')					// Ranged Weapons, Mod. - SMG
		h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index+1] + ' / ' + die[index+3] + '</td>\n'
	else if (wSkill == 's_1_3_0' || wSkill == 's_1_3_1' || wSkill == 's_1_3_3')
													// Ranged Weapons, Prim. - Bow / Crossbow / Sling
	{
		if (selectedIndex < 3)
			h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index+1] + ' / ' + die[index+2] + '</td>\n'
		else
			h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index] + ' / ' + die[index+1] + '</td>\n'
	}
	else if (wSkill == 's_1_3_2')					// Ranged Weapons, Prim. - Flintlock
	{
		if (wName.indexOf('Pistol') == 0)
		{
			if (selectedIndex < 3)
				h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index+1] + ' / ' + die[index+3] + '</td>\n'
			else
				h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index] + ' / ' + die[index+2] + '</td>\n'
		}
		else
		{
			if (selectedIndex < 3)
				h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index] + ' / ' + die[index+1] + '</td>\n'
			else
				h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index] + ' / ' + die[index] + '</td>\n'
		}
	}
	else if (wRange.indexOf('*') != -1)
		h += '<td align=center nowrap>' + die[index-1] + ' / ' + die[index+1] + ' / ' + die[index+2] + ' (<i>thrown</i>)</td>\n'
	else
		h += '<td align=center nowrap>' + die[index] + '</td>\n'
	return(h)
}
function get_benefit_points()
{
	var points = 0
	for (var x=0; x<achievement_benefit.length; x++)
		points += benefit_value(x)
	return(points)
}
function get_free_broad_skills(f)
{
	var points = 0
	var species = get_species(f)
	for (var x=0; x<spec.length; x++)
		if (spec[x] == species)
			for (var i=0; i<6; i++)
				if (free_broad_skill[x][i].length > 0 && !have_skill(free_broad_skill[x][i]))
					points += 3
	return(points)
}
function get_perks_flaws_points(f, type)
{
	var points = 0
	var c = type.charAt(0)
	var len = eval(type + '.length')
	for (var x=0; x<len; x++)
		if (eval('f.' + c + '_' + x + '.checked'))
		{
			if (eval(type + '[' + x + '][1].indexOf("/") == -1'))
			{
				if (c == 'f' || cookiee[other].indexOf('\tb_' + new_perk[x] + '\t') == -1)
					points += parseInt(eval(type + '[' + x + '][1]'))
			}
			else
			{
				var token = eval(type + '[' + x + '][1].split("/")')
				if (c == 'p' && x == 20)
					for (var i=0; i<3; i++)
					{
						if (eval('f.p_20_r_' + i + '.checked'))
							points += parseInt(token[i])
					}
				else
				{
					var l = eval('f.' + c + '_' + x + '_r.length')
					for (var i=0; i<l; i++)
						if (eval('f.' + c + '_' + x + '_r[' + i + '].checked'))
						{
							if (c == 'f' || cookiee[other].indexOf('\tb_' + new_perk[x] + '\t') == -1)
								points += parseInt(token[i])
							break
						}
				}
			}
		}
	return(points)
}
function get_last_resorts_info(profession)
{
	var resorts = 4
	var cost = 1
	if (ability_score[personality] <= 7)
	{
		resorts = 0
		cost = '-'
	}
	else if (ability_score[personality] <= 10)
	{
		resorts = 1
		cost = 3
	}
	else if (ability_score[personality] <= 12)
	{
		resorts = 2
		cost = 2
	}
	else if (ability_score[personality] <= 14)
		resorts = 3
	if (profession == 'F')
		resorts++
	return(new Array(resorts, cost))
}
function get_skill_points_spent(f,profession)
{
	broad_skills_selected = 0
	var points = 0
	var s = 0
	var species = get_species(f)
	for (s=0; s<spec.length; s++)
		if (spec[s] == species)
			break
	var sec_prof = 'X'
	if (f.i_11.selectedIndex > 0)
		sec_prof = sec_profession[f.i_11.selectedIndex].charAt(0)
	for (var x=0; x<broad.length; x++)
		for (var y=0; y<broad[x].length; y++)
			if (have_skill('s_' + x + '_' + y))
			{
				var free = false
				for (var i=0; i<6; i++)
				{
					var token = free_broad_skill[s][i].split('_')
					if (token[1] == x && token[2] == y)
					{
						free = true
						break
					}
				}
				if (!free)
				{
					var token = broad[x][y].split('|')
					points += parseInt(token[1])
					if (token[2].indexOf(profession) != -1 || token[2].indexOf(sec_prof) != -1)
						points--
					broad_skills_selected++
				}
				for (var z=0; z<skill[x][y].length; z++)
				{
					var selectedIndex = skill_value('s_' + x + '_' + y + '_' + z)
					if (selectedIndex > 0)
					{
						var token = skill[x][y][z].split('|')
						var p = parseInt(token[2])
						if (token[3].indexOf(profession) != -1 || token[3].indexOf(sec_prof) != -1)
							p--
						p *= selectedIndex
						if (f.i_9[0].checked || f.i_9[2].checked)
							for (var i=0; i<selectedIndex; i++)
								p += i
						points += p
					}
				}
			}
	var no_cost = true
	for (var x=0; x<cyber.length; x++)
		if (eval('f.c_' + x + '.checked') && cyber_free.indexOf('|' + x + '|') == -1 &&
				!((x == 10 || x == 19 || x == 24) && species == 'Mechalus'))
		{
			points += 10
			no_cost = false
			break
		}
	if (no_cost)
	{
		var cookie = get_cookie('custom')
		var token = cookie.split('\t')
		var x = 1
		while (x < token.length-1)
		{
			if (token[x] == 'c' && (token[x+8].length == 0 || token[x+8].charAt(0) == "N"))
			{
				points += 10
				break
			}
			x += get_length(token[x])
		}
	}
	return(points)
}
function get_broad_skills_and_skill_points_available(f,species,profession)
{
	var points = 5 * ability_score[intelligence] - 5
	var bs = Math.floor(ability_score[intelligence] / 2)
	if (f.i_9[1].checked || f.i_9[2].checked)
	{
		points = 30 + (3 * ability_score[intelligence])
		bs = 6 + resistance_modifier(f, intelligence)
	}
	if (species == 'Human')
	{
		points += 5
		bs++
	}
	var token = cookiee[info].split('\t')
	var a_points = parseInt(token[49])
	var level = get_level(a_points)
	for (var x=1; x<level; x++)
	{
		points += 5+x
		if (profession == 'T')
		{
			if (x < 5)
				points++
			else if (x < 10)
				points += 2
			else if (x < 15)
				points += 3
			else if (x < 20)
				points += 4
			else
				points += 5
		}
	}
	points -= get_benefit_points()
	var a = new Array(2)
	a = get_last_resorts_info(profession)
	last_resorts = a[0]
	last_resort_cost = a[1]
	points -= (parseInt(token[50]) * (last_resort_cost=='-'?0:last_resort_cost))
	points += get_free_broad_skills(f)
	points -= get_perks_flaws_points(f,'perk')
	points += get_perks_flaws_points(f,'flaw')
	return(new Array(bs, points))
}
function get_tk_increased_effect()
{
	return(Math.max(Math.floor(skill_value('s_3_12_3')/3),0)); // Technnical knowledge
}
function write_skill(ability)
{
	var h = ''
	h += '<tr>\n'
	h += '<t' + tfont + ' align=left colspan=3><font color="green" face="' + font + '">' + ability + ' Skills</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font color="green" face="' + font + '">Rank</font></t' + tfont + '>\n'
	h += '<t' + tfont + ' align=center><font color="green" face="' + font + '">Score</font></t' + tfont + '>\n'
	h += '<td width=50><br></td>\n'
	var f = parent.frames[0].document.forms[0]
	h += '<td>'
	if (ability == 'DEX')
	{
		if (f.f_3.checked) // Clumsy
			h += flaw[3][0] + ' Flaw: +1 penalty to all Dexterity-based skill checks<br>'
	}
	else if (ability == 'INT')
	{
		if (f.f_7.checked) // Forgetful
			h += flaw[7][0] + ' Flaw: +1 penalty to all Intelligence-based skill checks<br>'
	}
	else if (ability == 'CON')
	{
		if (have_mutation(13))      // Improved Immunity
			h += mutation[13][3] + ' Mutation: -2 bonus to checks made to counter the effects of disease, infection, or biological agents<br>'
		else if (have_mutation(31)) // Enhanced Immunity
			h += mutation[31][3] + ' Mutation: -3 bonus to checks made to counter the effects of disease, infection, or biological agents<br>'
		else if (have_mutation(53)) // Hyper Immunity
			h += mutation[53][3] + ' Mutation: -4 bonus to checks made to counter the effects of disease, infection, or biological agents<br>'
		else if (have_mutation(76)) // Weak Immunity
			h += mutation[76][3] + ' Mutation: +2 penalty to checks made to counter the effects of disease, infection, or biological agents<br>'
		else if (have_mutation(89)) //  Wild Immunity
			h += mutation[89][3] + ' Mutation: possible -3 bonus to checks made to counter the effects of disease, infection, or biological agents<br>'
		if (have_mutation(22))      // Toxin Tolerance
			h += mutation[22][3] + ' Mutation: -2 bonus to checks made to combat poisons or drugs<br>'
		else if (have_mutation(75)) // Toxin Intolerance
			h += mutation[75][3] + ' Mutation: +2 penalty to checks made to combat poisons or drugs<br>'
	}
	else if (ability == 'WIL')
	{
		if (have_mutation(63)) // Psi Resistance
			h += mutation[63][3] + ' Mutation: +2 improvement to the resistance modifier against direct psionic attacks<br>'
		if (have_mutation(17))      // Improved Senses
			h += mutation[17][3] + ' Mutation: -1 bonus to Will feat checks in which any of the five senses play a part<br>'
		else if (have_mutation(35)) // Enhanced Senses
			h += mutation[35][3] + ' Mutation: -2 bonus to Will feat checks in which any of the five senses play a part<br>'
		else if (have_mutation(58)) // Hyper Senses
			h += mutation[58][3] + ' Mutation: -3 bonus to Will feat checks in which any of the five senses play a part<br>'
	}
	else if (ability == 'PER')
	{
		if (f.p_11.checked) // Great Looks
			h += perk[11][0] + ' Perk: possible -1 bonus to Personality-based skill checks<br>'
		if (f.f_9.checked)  // Infamy
			for (var x=0; x<3; x++)
				if (eval('f.f_9_r[' + x + '].checked'))
				{
					h += flaw[9][0] + ' Flaw: +' + (x+1) + ' penalty to all Personality-based skill checks<br>'
					break
				}
		if (f.f_14.checked) // Poor Looks
			h += flaw[14][0] + ' Flaw: possible +1 penalty to Personality-based skill checks<br>'
		if (have_mutation(84))      // Minor Physical Change
			h += mutation[84][3] + ' Mutation: +2 penalty to all skill checks (and any other skills used to interact with other characters)<br>'
		else if (have_mutation(98)) // Major Physical Change
			h += mutation[98][3] + ' Mutation: +4 penalty to all skill checks (and any other skills used to interact with other characters)<br>'
	}
	h += '</td>\n'
	h += '</tr>\n'
	return(h)
}
function write_broad(name, ability)
{
	var bold = 0
	var h = ''
	h += '<tr>\n'
	h += '<td width=15><br></td>\n'
	h += '<th align=left colspan=2>' + name + '</th>\n'
	h += '<td align=center><br></td>\n'
	h += '<td align=right nowrap>' + ability + ' / ' + Math.floor(ability/2) + ' / ' + Math.floor(ability/4) + '</td>\n'
	h += '<td><br></td>\n'
	var f = parent.frames[0].document.forms[0]
	h += '<td>'
	if (name == 'Armor Operation')
	{
		h += 'action check and Dexterity resistance modifier penalty of any type of armor reduced by 1 step (never provides a bonus)<br>'
	}
	else if (name == 'Unarmed Attack')
	{
		if (f.p_8.checked) // Fists of Iron
		{
			if (f.p_8_r[0].checked)
			{
				h += '<b>Fists of Iron Perk: 1-point increase to damage</b><br>'
				bold++
			}
			else if (f.p_8_r[1].checked)
				h += 'Improved Fists of Iron Perk<br>'
		}
		if (f.f_5.checked) // Delicate
			h += flaw[5][0] + ' Flaw<br>'
	}
	else if (name == 'Stamina')
	{
		if (have_mutation(7)) // Biorhythm Control
			h += mutation[7][3] + ' Mutation: skill checks made with a -1 bonus<br>'
	}
	else if (name == 'Technical Science')
	{
		var increased_effect = get_tk_increased_effect()
		if (increased_effect > 0)
			h += 'Increased Effect: -' + increased_effect + ' step situation die bonus<br>'
	}
	else if (name == 'Animal Handling')
	{
		if (f.p_2.checked) // Animal Friend
			h += perk[2][0] + ' Perk: skill checks made with a -1 bonus<br>'
	}
	else if (name == 'Investigate')
	{
		if (have_mutation(17))      // Improved Senses
			h += mutation[17][3] + ' Mutation: -1 bonus to skill checks in which any of the five senses play a part<br>'
		else if (have_mutation(35)) // Enhanced Senses
			h += mutation[35][3] + ' Mutation: -2 bonus to skill checks in which any of the five senses play a part<br>'
		else if (have_mutation(58)) // Hyper Senses
			h += mutation[58][3] + ' Mutation: -3 bonus to skill checks in which any of the five senses play a part<br>'
	}
	else if (name == 'Leadership')
	{
		var rank = 0
		for (var x=0; x<skill[5][4].length; x++)
		{
			var selectedIndex = skill_value('s_5_4_' + x)
			if (selectedIndex > rank)
				rank = selectedIndex
		}
		if (rank >= 4)
			h += '-' + Math.floor(rank/4) + ' bonus to skill check<br>'
	}
	if (name == 'Athletics' || name == 'Melee Weapons' || name == 'Unarmed Attack' ||
			name == 'Acrobatics' || name == 'Stamina' || name == 'Movement')
	{
		var x = ''
		if (have_mutation(6) && name != 'Stamina')        // Adrenal Control
		{
			x = '-1 bonus'
			h += mutation[6][3]
		}
		else if (have_mutation(38) && name != 'Stamina')  // Increased Metabolism
		{
			x = '-2 bonus'
			h += mutation[38][3]
		}
		else if (have_mutation(55))                       // Hyper Metabolism
		{
			x = '-3 bonus'
			h += mutation[55][3]
		}
		else if (have_mutation(83) && name != 'Stamina')  // Inefficient Metabolism
		{
			x = '+2 penalty'
			h += mutation[83][3]
		}
		else if (have_mutation(101) && name != 'Stamina') // Weak Metabolism
		{
			x = '+3 penalty'
			h += mutation[101][3]
		}
		if (x != '')
		{
			h += ' Mutation: ' + x + ' to skill checks' + (x.charAt(0)=='-'?' when boosted':'')
			if ((name == 'Unarmed Attack' || name == 'Melee Weapons') && x.charAt(0) == '-')
				h += ' (' + x.charAt(1) + '-point increase to damage when boosted)'
			h += '<br>\n'
		}
	}
	if ((name == 'Stamina' || name == 'Survival') && have_mutation(74)) // Thermal Intolerance
		h += mutation[74][3] + ' Mutation: +2 penalty to skill checks made in hot or cold conditions<br>'
	if ((name == 'Stamina' || name == 'Resolve') && have_mutation(89))  // Wild Immunity
		h += mutation[89][3] + ' Mutation: possible +3 penalty to skill checks<br>'
	if (have_skill('s_5_2'))
		for (var x=0; x<skill[5][2].length; x++)
		{
			var ent_rank = skill_value('s_5_2_' + x)
			if (ent_rank > 0)
			{
				var text = skill_text('s_5_2_' + x + '_s_0')
				if (text == name)
				{
					var token = skill[5][2][x].split('|')
					var bonus = -Math.floor(ent_rank/4) - 1
					h += 'Skill Enhanced by Entertainment-<i>' + token[0] + '</i>: ' + bonus + ' bonus<br>'
					break
				}
			}
		}
	h += '</td>\n'
	h += '</tr>\n'
	return(bold + ',' + h)
}
function have_mutation(m)
{
	var f = parent.frames[0].document.forms[0]
	if (get_species(f) != 'Mutant')
		return(false)
	else
		return(cookiee[other].indexOf('\tm_' + m + '\t') != -1)
}
function write_specialty(skill_id, name, rank, score, trained)
{
	var bold = 0
	var color = 'black'
	if (trained == 't')
		color = '#0066FF'
	var h = ''
	h += '<tr>\n'
	h += '<td width=15><br></td>\n'
	h += '<td width=15><br></td>\n'
	h += '<th align=left><font color="' + color + '">' + name + '</font></th>\n'
	h += '<td align=center>' + rank + ' </td>\n'
	h += '<td align=right nowrap>' + (score+rank) + ' / ' + Math.floor((score+rank)/2) + ' / ' + Math.floor((score+rank)/4) + '</td>\n'
	h += '<td><br></td>\n'
	var f = parent.frames[0].document.forms[0]
	var species = get_species(f)
	h += '<td>'
	if (skill_id == cs_sit_bonus[f.i_10.selectedIndex][1])
	{
		h += '<b>Combat Spec Situation Bonus: -1 step situation die bonus</b><br>'
		bold++
	}
	if (have_skill('s_5_2'))
		for (var x=0; x<skill[5][2].length; x++)
		{
			var ent_rank = skill_value('s_5_2_' + x)
			if (ent_rank > 0)
			{
				var text = skill_text('s_5_2_' + x + '_s_0')
				var token = text.split('-')
				if (token[1] == name)
				{
					var token = skill[5][2][x].split('|')
					var bonus = -Math.floor(ent_rank/4) - 1
					h += 'Skill Enhanced by Entertainment-<i>' + token[0] + '</i>: ' + bonus + ' bonus<br>'
					break
				}
			}
		}
	for (var x=0; x<ability.length; x++)
		if (skill_id.charAt(2) == x)
		{
			var ret = eval('write_specialty_' + x + '(f, skill_id, rank, species);')
			var retndx = ret.indexOf(',')
			bold += parseInt(ret.substring(0,retndx))
			h += ret.substring(retndx+1)
			break
		}
	h += '</td>\n'
	h += '</tr>\n'
	return(bold + ',' + h)
}
function write_specialty_0(f, skill_id, rank, species)
// STR
{
	var bold = 0
	var h = ''
	if (skill_id.substring(0,6) == 's_0_0_') // Armor Operation
	{
		h += (rank<4?'':'Improved Operation: ') + 'action check and Dexterity resistance modifier penalty of this type of armor reduced by ' + Math.floor((rank+2)/3) + ' additional step' + (rank<4?'':'s') + ' (never provides a bonus)<br>'
		if (rank > 1)
			h += 'Shaking Off Stuns'
	}
	else if (skill_id == 's_0_1_1') // Athletics-Jump
	{
		if (rank >= 3)
			h += 'Increased Distance'
	}
	else if (skill_id.substring(0,6) == 's_0_3_') // Melee Weapons
	{
		if (rank >= 4)
		{
			h += '<b>Resistance Modifier: Strength resistance modifier improved by +' + Math.floor(rank/4) + '</b><br>'
			bold++
			h += 'Reaction Parry<br>'
		}
		if (rank >= 6)
			h += 'Double-Strike<br>'
		if (rank >= 9)
			h += 'Multistrike<br>'
	}
	else if (skill_id.substring(0,6) == 's_0_4_') // Unarmed Attack
	{
		if (skill_id == 's_0_4_0') // Brawl
		{
			if (rank >= 4)
				h += 'Knockout<br>'
			if (rank >= 8 && get_species(f) != 'Weren')
			{
				h += '<b>Increased Damage: ' + modify_damage(f, 'd6s/d6+2s/d4w', resistance_modifier(f, strength), 4) + '</b><br>'
				bold++
			}
		}
		else if (skill_id == 's_0_4_1') // Power martial arts
		{
			if (rank >= 4)
			{
				h += '<b>Resistance Modifier: Strength resistance modifier improved by +' + Math.floor(rank/4) + '</b><br>'
				bold++
			}
			if (rank >= 5)
				h += 'No Hands<br>'
			if (rank >= 3)
				h += 'Knockout<br>'
			if (rank >= 7 && get_species(f) != 'Weren')
			{
				h += '<b>Increased Damage: ' + modify_damage(f, 'd6+2s/d4w/d4+2w', resistance_modifier(f, strength), 100) + '</b><br>'
				bold++
			}
		}
	}
	return(bold + ',' + h)
}
function write_specialty_1(f, skill_id, rank, species)
// DEX
{
	var bold = 0
	var h = ''
	if (skill_id == 's_1_0_1') // Acrobatics-Defensive martial arts
	{
		if (rank >= 2)
			h += 'Block<br>'
		if (rank >= 4)
		{
			h += 'Reaction Block<br>'
			h += '<b>Resistance Modifier: Strength resistance modifier improved by +' + Math.floor(rank/4) + '</b><br>'
			bold++
		}
	}
	else if (skill_id == 's_1_0_2') // Acrobatics-Dodge
	{
		if (rank >= 3)
			h += 'Action Benefit<br>'
		if (rank >= 7)
			h += 'Reaction Dodge<br>'
		if (rank >= 4)
		{
			h += '<b>Resistance Modifier: Dexterity resistance modifier improved by +' + Math.floor(rank/4) + '</b><br>'
			bold++
		}
	}
	else if (skill_id == 's_1_0_4') // Acrobatics-Flight
	{
		if (rank >= 3)
		{
			h += '<b>Improved Movement: Glide rate increased by +' + Math.floor((rank+1)/4)*2 + '</b><br>'
			bold++
		}
		if (rank >= 4)
		{
			h += '<b>Improved Movement: Fly rate increased by +' + Math.floor(rank/4)*3 + '</b><br>'
			bold++
		}
	}
	else if (skill_id == 's_1_0_5') // Acrobatics-Zero-g training
	{
		if (species == 'Sesheyan')
		{
			h += 'Sesheyan Advantage: '
			if (rank < 4)
				h += 'zero-g penalty: +1 step; light gravity bonus: -1 step<br>'
			else if (rank < 7)
				h += 'zero-g penalty: none; light gravity bonus: -2 steps<br>'
			else if (rank < 10)
				h += 'zero-g bonus: -1 step; light gravity bonus: -2 steps<br>'
			else
				h += 'zero-g bonus: -2 steps; light gravity bonus: -2 steps<br>'
		}
		else
		{
			if (rank < 4)
				h += 'zero-g penalty: +2 steps; light gravity penalty: none<br>'
			else if (rank < 7)
				h += 'Improved Training: zero-g penalty: +1 step; light gravity bonus: -1 step<br>'
			else if (rank < 10)
				h += 'Improved Training: zero-g penalty: none; light gravity bonus: -1 step<br>'
			else
				h += 'Improved Training: zero-g bonus: -1 step; light gravity bonus: -1 step<br>'
		}
	}
	else if (skill_id == 's_1_1_1') // Manipulation-Pickpocket
	{
		if (rank >= 3)
			h += 'It Takes One to Know One<br>'
	}
	else if (skill_id == 's_1_2_0') // Ranged Weapons, Mod.-Pistol
	{
		if (rank >= 3)
			h += 'Quick Draw<br>'
		if (rank >= 5)
			h += '<b>Distance Precision: no medium range step penalty; long range penalty lessened 1 step</b><br>'
		if (rank >= 6)
			h += 'Double Shot<br>'
	}
	else if (skill_id == 's_1_2_1') // Ranged Weapons, Mod.-Rifle
	{
		if (rank >= 3)
		{
			h += '<b>Improved Aim: -1 situation die bonus for any rifle attack</b><br>'
			bold++
			h += '<b>Distance Precision: no medium range step penalty; long range penalty lessened 1 step</b><br>'
		}
		if (rank >= 6)
			h += 'Precision Shooting<br>'
	}
	else if (skill_id == 's_1_2_2') // Ranged Weapons, Mod.-SMG
	{
		if (rank >= 3)
			h += 'Rock-n-Roll<br>'
		if (rank >= 6)
			h += 'Precision Shooting<br>'
		if (rank >= 9)
			h += 'Extra Burst<br>'
	}
	else if (skill_id.substring(0,6) == 's_1_3_') // Ranged Weapons, Prim.
	{
		if (rank >= 3)
			h += '<b>Distance Precision: no medium range step penalty; long range penalty lessened 1 step</b><br>'
		if (skill_id == 's_1_3_0' || skill_id == 's_1_3_3') // Bow & Sling
		{
			if (rank >= 6)
			h += 'Double-Shot<br>'
		}
		else if (skill_id == 's_1_3_1' || skill_id == 's_1_3_2') // Crossbow & Flintlock
		{
			if (rank >= 6)
				h += 'Rate of Fire Increase<br>'
		}
	}
	else if (skill_id.substring(0,6) == 's_1_4_') // Stealth
	{
		if ((skill_id == 's_1_4_0' && rank >= 4) ||
				(skill_id == 's_1_4_1' && rank >= 5) ||
				(skill_id == 's_1_4_2' && rank >= 6))
			h += 'Increased Effect<br>'
	}
	else if (skill_id.substring(0,6) == 's_1_5_') // Vehicle Operation
	{
		if (rank >= 4)
			h += 'Improved Proficiency: -' + Math.floor(rank/4) + ' bonus<br>'
	}
	return(bold + ',' + h)
}
function write_specialty_2(f, skill_id, rank, species)
// CON
{
	var bold = 0
	var h = ''
	if (skill_id == 's_2_0_0') // Movement-Race
	{
		if (rank >= 5)
		{
			h += '<b>Movement Rate Increase: Run rate increased by ' + Math.floor((rank-1)/4)*2 + '</b><br>'
			bold++
		}
		if (rank >= 4)
		{
			h += '<b>Movement Rate Increase: Sprint rate increased by '
			if (rank < 7)
				h += '2'
			else if (rank < 12)
				h += '4'
			else
				h += '6'
			h += '</b><br>'
			bold++
		}
	}
	else if (skill_id == 's_2_0_1') // Movement-Swim
	{
		if (rank >= 4)
		{
			h += 'Improved Breathing<br>'
			h += '<b>Movement Rate Increase: Swim and Easy Swim rates increased by ' + Math.floor(rank/4) + '</b><br>'
			bold++
		}
	}
	else if (skill_id == 's_2_1_0') // Stamina-Endurance
	{
		if (f.p_9.checked)
			h += perk[9][0] + ' Perk: skill checks made with a -1 bonus<br>'
		if (f.f_8.checked)
			h += flaw[8][0] + ' Flaw: skill checks made with a +1 penalty<br>'
		for (var x=0; x<5; x++)
			if (have_mutation(x)) // Adaptation, Environment
				h += mutation[x][3] + ' Mutation: -2 bonus to all skill checks in this environment<br>'
		if (have_mutation(23)) // Vascular Control
			h += mutation[23][3] + ' Mutation: -1 bonus to all skill checks related to mortal damage<br>'
		if (have_mutation(30))      // Enhanced Healing
			h += mutation[30][3] + ' Mutation: -1 bonus to all skill checks related to mortal damage<br>'
		else if (have_mutation(52)) // Hyper Healing
			h += mutation[52][3] + ' Mutation: -2 bonus to all skill checks related to mortal damage<br>'
		if (have_mutation(41)) // Radiation Tolerance
			h += mutation[41][3] + ' Mutation: -3 bonus to all skill checks related to overcoming the harmful effects of radiation<br>'
		if (have_mutation(42)) // Redundant Vital Organs
			h += mutation[42][3] + ' Mutation: -3 bonus to all skill checks related to mortal damage<br>'
	}
	return(bold + ',' + h)
}
function write_specialty_3(f, skill_id, rank, species)
// INT
{
	var bold = 0
	var h = ''
	if (skill_id == 's_3_0_1') // Business-Illicit business
		h += (rank<4?'':'Increased Effect: ') + '-' + Math.floor((rank+2)/3) + ' step illicit business penalty reduction (never provides a bonus)<br>'
	else if (skill_id == 's_3_0_2') // Business-Small business
		h += (rank<4?'':'Increased Effect: ') + '-' + (Math.floor(rank/4)+1) + ' step situation die bonus<br>'
	else if (skill_id == 's_3_1_0') // Computer Science-Hacking
	{
		if (species == 'Mechalus')
			h += '-' + (Math.floor(rank/4)+1) + ' step situation die bonus when merged with the computer<br>'
		if (rank >= 4)
			h += 'Increased Effect: -' + Math.floor(rank/4) + ' step situation die bonus' + (species=='Mechalus'?' when not merged with the computer':'') + '<br>'
	}
	else if (skill_id == 's_3_1_1') // Computer Science-Hardware
	{
		if (rank >= 4)
			h += 'Increased Effect: -' + Math.floor(rank/4) + ' step situation die bonus<br>'
	}
	else if (skill_id == 's_3_1_2') // Computer Science-Programming
	{
		h += 'Modify Existing Programs (up to ' + (rank<3?'Ordinary':(rank<6?'Good':'Amazing')) + ' quality and complexity)<br>'
		if (rank >= 3)
			h += 'Create New Programs (up to ' + (rank<6?'Marginal':(rank<9?'Ordinary':(rank<12?'Good':'Amazing'))) + ' quality and complexity)<br>'
	}
	else if (skill_id.substring(0,6) == 's_3_3_') // Knowledge
	{
		var token = skill_id.split('_')
		if (skill_id == 's_3_3_0') // Computer operation
		{
			if (species == 'Mechalus')
				h += '-1 step situation die bonus when merged with the computer<br>'
		}
		else if (skill_id == 's_3_3_1') // Deduce
		{
			if (rank >= 4)
			{
				h += '<b>Resistance Modifier: Intelligence resistance modifier improved by +' + Math.floor(rank/4) + '</b><br>'
				bold++
			}
		}
		else if (skill_id == 's_3_3_2') // First aid
		{
			if (rank >= 4)
				h += 'Improved First Aid: situation die penalty reduced by ' + Math.floor(rank/4) + ' step' + (rank<8?'':'s') + ' (never provides a bonus)<br>'
		}
		else if (token[3] >= 3 && token[3] <= 7) // Language [specific]
		{
			if (rank == 1)
				h += '+3 penalty<br>'
			else
			{
				h += 'Improved Communication: '
				if (rank == 2)
					h += '+1 penalty<br>'
				else if (rank < 6)
					h += 'no modifier<br>'
				else if (rank < 9)
					h += '-1 bonus<br>'
				else if (rank < 12)
					h += '-2 bonus<br>'
				else
					h += '-3 bonus<br>'
			}
		}
	}
	else if (skill_id.substring(0,6) == 's_3_4_') // Law
	{
		var token = skill_id.split('_')
		if (token[3] >= 2 && rank >= 3)
			h += 'Increased Effect: skill checks made with a -' + Math.floor(rank/3) + ' bonus<br>'
	}
	else if (skill_id.substring(0,6) == 's_3_5_') // Life Science
	{
		if (rank >= 3)
			h += 'Increased Effect: skill checks made with a -' + Math.floor(rank/3) + ' bonus<br>'
	}
	else if (skill_id.substring(0,6) == 's_3_6_') // Medical Science
	{
		var token = skill_id.split('_')
		if (skill_id == 's_3_6_0' || skill_id == 's_3_6_2') // Forensics & Psychology
		{
			if (rank >= 3)
				h += 'Increased Effect: skill checks made with a -' + Math.floor(rank/3) + ' bonus<br>'
		}
		else if (skill_id == 's_3_6_3') // Surgery
		{
			if (rank >= 3)
				h += 'Cybernetic Surgery<br>'
		}
		else if (skill_id == 's_3_6_4') // Treatment
		{
			var reduction = Math.floor(rank/3)
			var selectedIndex = skill_value('s_3_6_1'); // (Medical knowledge)
			if (selectedIndex == 12)
				reduction += 4
			else if (selectedIndex >= 8)
				reduction += 3
			else if (selectedIndex >= 5)
				reduction += 2
			else if (selectedIndex >= 2)
				reduction += 1
			if (reduction > 0)
				h += 'Improved Treatment: situation die penalty reduced by ' + reduction + ' step' + (reduction==1?'':'s') + ' (never provides a bonus)<br>'
		}
		else if (parseInt(token[3]) >= 5) // Xenomedicine [specific]
		{
			if (rank < 3)
				h += 'situation die penalty: +3 steps<br>'
			else
			{
				h += 'Improved Treatment: situation die '
				if (rank < 6)
					h += 'penalty: +2<br>'
				else if (rank < 9)
					h += 'penalty: +1<br>'
				else if (rank < 12)
					h += 'penalty: none<br>'
				else
					h += 'bonus: -1<br>'
			}
		}
	}
	else if (skill_id.substring(0,6) == 's_3_8_') // Physical Science
	{
		if (rank >= 3)
			h += 'Increased Effect: -' + Math.floor(rank/3) + ' step situation die bonus<br>'
	}
	else if (skill_id.substring(0,7) == 's_3_11_') // Tactics
	{
		if (rank >= 4)
			h += 'Increased Effect: -' + Math.floor(rank/4) + ' step situation die bonus<br>'
	}
	else if (skill_id.substring(0,7) == 's_3_12_') // Technical Science
	{
		if (skill_id != 's_3_12_3') // Technical knowledge
		{
			var increased_effect = get_tk_increased_effect()
			if (skill_id == 's_3_12_1' && species == 'T\'sa') // (Juryrig)
				h += (increased_effect>0?'Increased Effect: ':'') + '-' + (increased_effect+1) + ' step situation die bonus<br>'
			else if (increased_effect > 0)
				h += 'Increased Effect: -' + increased_effect + ' step situation die bonus<br>'
		}
		if (skill_id == 's_3_12_1') // Juryrig
		{
			if (rank >= 6)
				h += 'Improved Juryrig<br>'
		}
	}
	return(bold + ',' + h)
}
function write_specialty_4(f, skill_id, rank, species)
// WIL
{
	var bold = 0
	var h = ''
	if (skill_id == 's_4_1_0') // Animal Handling-Animal riding
	{
		if (rank >= 3)
			h += 'Trick Riding<br>'
	}
	else if (skill_id == 's_4_2_0') // Awareness-Intuition
	{
		if (f.p_5.checked)
			h += perk[5][0] + ' Perk: skill checks made with a -2 bonus<br>'
	}
	else if (skill_id == 's_4_2_1') // Awareness-Perception
	{
		if (f.p_13.checked)
			h += perk[13][0] + ' Perk: skill checks made with a -1 bonus<br>'
		if (f.f_10.checked)
			h += flaw[10][0] + ' Flaw: skill checks made with a +1 penalty<br>'
		if (have_mutation(17))      // Improved Senses
			h += mutation[17][3] + ' Mutation: -1 bonus to skill checks in which any of the five senses play a part<br>'
		else if (have_mutation(35)) // Enhanced Senses
			h += mutation[35][3] + ' Mutation: -2 bonus to skill checks in which any of the five senses play a part<br>'
		else if (have_mutation(58)) // Hyper Senses
			h += mutation[58][3] + ' Mutation: -3 bonus to skill checks in which any of the five senses play a part<br>'
	}
	else if (skill_id == 's_4_5_0') // Resolve-Mental resolve
	{
		if (rank >= 4)
		{
			h += '<b>Resistance Modifier: Will resistance modifier improved by +' + Math.floor(rank/4) + '</b><br>'
			bold++
		}
	}
	else if (skill_id == 's_4_5_1') // Resolve-Physical resolve
	{
		if (have_mutation(7)) // Biorhythm Control
			h += mutation[7][3] + ' Mutation: skill checks made with a -1 bonus<br>'
	}
	return(bold + ',' + h)
}
function write_specialty_5(f, skill_id, rank, species)
// PER
{
	var bold = 0
	var h = ''
	if (skill_id == 's_5_0_0') // Culture-diplomacy
	{
		for (var x=1; x<=5; x++)
			if (Math.floor(skill_value('s_5_0_' + x)/3) > 0) // Culture-Etiquette
			{
				h += 'Increased Effect (see Culture-<i>etiquette</i>)<br>'
				break
			}
	}
	else if (skill_id.substring(0,6) == 's_5_2_')  // Entertainment
	{
		if (have_skill(skill_id + '_s_0'))
		{
			h += 'Enhance Another Skill: '
			var skillText = skill_text(skill_id + '_s_0')
			var token = skillText.split('-')
			h += token[0]
			if (token.length == 2)
				h += '-<i>' + token[1] + '</i>'
			h += '<br>'
		}
		if (skill_id == 's_5_2_0') // Act
		{
			if (rank >= 4)
				h += 'Disguise<br>'
		}
	}
	return(bold + ',' + h)
}
function set_cookie(name,value)
{
	var today = new Date()
	var expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	document.cookie = name + '=' + escape(value) + '; expires=' + expires.toGMTString()
}
function get_cookie(name)
{
	var ret = ""
	var search = name + '='
	if (document.cookie.length > 0)
	{
		offset = document.cookie.indexOf(search)
		if (offset != -1)
		{
			offset += search.length
			end = document.cookie.indexOf(';',offset)
			if (end == -1)
				end = document.cookie.length
			ret = unescape(document.cookie.substring(offset, end))
		}
	}
	return ret
}
function format_table_data(s)
{
	if (s.length == 0)
		return('<br>')
	var token = s.split('\n')
	var sRet = ''
	for (var x=0; x<token.length; x++)
	{
		var i = 0
		var len = token[x].length
		while (true)
		{
			var j = i
			if (i+40 >= len)
				break
			for (i=j+40; i>j; i--)
				if (token[x].charAt(i) == ' ')
					break
			if (i == j)
				i += 40
			sRet += token[x].substring(j,i) + '<br>'
		}
		sRet += token[x].substring(i) + '<br>'
	}
	return(sRet)
}
function modify_damage(f, d, rm, w)
{
	var token = d.split('/')
	damage = new Array(3)
	for (var x=0; x<3; x++)
	{
		var extra = 0
		var len = token[x].length
		var i = token[x].indexOf('+')
		if (i == -1)
			i = token[x].indexOf('-')
		if (i == -1)
			damage[x] = token[x].substring(0, len-1)
		else
		{
			damage[x] = token[x].substring(0, i)
			extra = parseInt(token[x].substring(i, i+2))
		}
		var type = token[x].charAt(len-1)
		extra += rm
		if (weapon[w][5].substring(0,8) == 'Unarmed-' && f.p_8.checked && f.p_8_r[0].checked)
			extra++
		damage[x] += (extra < 0 ? extra : (extra > 0 ? '+' + extra : '')) + type
	}
	return(damage[0] + '/' + damage[1] + '/' + damage[2])
}
function update_skill_points()
{
	var d = parent.frames[3].document
	d.open()
	d.writeln('<html>')
	d.writeln('<body bgcolor="white">')
	d.write  ('<center><b><font size="-1">')
	d.write  ('<a href="javascript:void(0)" onMouseOver="window.status=\'This is the number of skill points you have spent\'; return true" onMouseOut="window.status=\'\'; return true">' + skill_points_spent + '</a>')
	d.write  (' of ')
	d.write  ('<a href="javascript:void(0)" onMouseOver="window.status=\'This is the total number of skill points available\'; return true" onMouseOut="window.status=\'\'; return true">' + skill_points_available + '</a>')
	d.writeln('</font></b></center>')
	d.writeln('</body>')
	d.writeln('</html>')
	d.close()
}
function save(ask)
{
	for (var x=0; x<files; x++)
	{
		var cookie = get_cookie(cookies[0] + '_' + x)
		if (cookie != '')
		{
			var token = cookie.split('\t')
			if (token[0] == parent.frames[0].document.forms[0].i_0.value)
			{
				if (!ask || confirm('Overwrite saved hero "' + token[0] + '"?'))
				{
					save_hero(x)
					return(true)
				}
				else
					return(false)
			}
		}
		else
		{
			save_hero(x)
			return(true)
		}
	}
	alert('There are already ' + files + ' saved heroes!\nPlease delete a hero first.')
	window.open('file.htm', 'fileDB', 'width=225,height=150')
	return(false)
}
function new_hero()
{
	if (save(0))
	{
		for (var x=0; x<cookies.length; x++)
			set_cookie(cookies[x], '')
		window.location.reload()
	}
}
function save_hero(hero)
{
	for (var i=0; i<cookies.length; i++)
	{
		var cookie = get_cookie(cookies[i])
		set_cookie(cookies[i] + '_' + hero, cookie)
	}
}
function view() {
		var w = window.open('','view','menubar,resizable,scrollbars,titlebar')
		var d = w.document
		d.open()
		d.write(parent.hero)
		d.close()
}
function get_length(c)
{
	var x = 0
	for (x=0; x<lengths.length; x++)
		if (lengths[x] == c)
			break
		else
			x++
	return(lengths[x+1])
}
function toggle_cyber_gear(name)
{
	var f = parent.frames[0].document.forms[0]
	var checked = eval('f.' + name + '.checked')
	var token = name.split('_')
	var c = token[1]
	if (checked && !f.c_10.checked && cyber_nano.indexOf('|' + c + '|') != -1)
	{
		alert('A nanocomputer is required to use this gear!')
		eval('f.' + name + '.checked = false')
		return
	}
	if (!checked && c == 10)
	{
		if (get_species(f) == 'Mechalus')
			f.c_10.checked = true
		else
			process_nanocomputer(f)
		return
	}
	if (!checked && (c == 19 || c == 24) && get_species(f) == 'Mechalus')
	{
		eval('f.' + name + '.checked = true')
		return
	}
	if (get_size(f, c) > get_cyber_tolerance(f))
	{
		alert('You do not have enough cyber tolerance boxes available to install this gear!')
		eval('f.' + name + '.checked = false')
		return;	
	}
	if (!checked)
		remove_cyber_gear_from_cookie(c)
	else
	{
		add_cyber_gear_to_cookie(f, c)
		if (c == 3)
			remove_others(f, new Array(4,5))
		if (c == 4)
			remove_others(f, new Array(3,5))
		if (c == 5)
			remove_others(f, new Array(3,4))
		if (c == 15)
			remove_others(f, new Array(16,17))
		if (c == 16)
			remove_others(f, new Array(15,17))
		if (c == 17)
			remove_others(f, new Array(15,16))
	}
	check_cyber_gear(f)
}
function process_nanocomputer(f)
{
	var found = false
	for (var x=0; x<cyber.length; x++)
		if (eval('f.c_' + x + '.checked') && cyber_nano.indexOf('|' + x + '|') != -1)
		{
			found = true
			break
		}
	if (!found)
	{
		remove_cyber_gear_from_cookie(10)
		return
	}
	else if (!confirm('All gear which needs a nanocomputer will be taken away!'))
	{
		f.c_10.checked = true
		return
	}
	for (var x=0; x<cyber.length; x++)
		if (eval('f.c_' + x + '.checked') && cyber_nano.indexOf('|' + x + '|') != -1)
		{
			eval('f.c_' + x + '.checked = false')
			remove_cyber_gear_from_cookie(x)
		}
	remove_cyber_gear_from_cookie(10)
	var cookie = get_cookie('custom')
	var token = cookie.split('\t')
	var x = 1
	while (x < token.length-1)
	{
		if (token[x] == 'c' && token[x+8].length > 0 && token[x+8].charAt(0) == 'N')
			token[x+8] = ''
		x += get_length(token[x])
	}
	var cookie = '\t'
	for (var x=1; x<token.length-1; x++)
		cookie += token[x] + '\t'
	set_cookie('custom', cookie)
}
function get_size(f, c)
{
	var size = 0
	for (var x=0; x<cyber.length; x++)
		if (eval('f.c_' + x + '.checked'))
			size += cyber[x][2]
	var cookie = get_cookie('custom')
	var token = cookie.split('\t')
	var x = 1
	while (x < token.length-1)
	{
		if (token[x] == 'c')
			size += parseInt(token[x+3]=='-'?0:token[x+3])
		x += get_length(token[x])
	}
	if (eval('f.c_' + c + '.checked'))
		size -= adjust_size(f, c)
	return(size)
}
function adjust_size(f, c)
{
	var size = 0
	if (c == 3)
	{
		if (f.c_4.checked)
			size = parseInt(cyber[4][2])
		else if (f.c_5.checked)
			size = parseInt(cyber[5][2])
	}
	else if (c == 4)
	{
		if (f.c_3.checked)
			size = parseInt(cyber[3][2])
		else if (f.c_5.checked)
			size = parseInt(cyber[5][2])
	}
	else if (c == 5)
	{
		if (f.c_3.checked)
			size = parseInt(cyber[3][2])
		else if (f.c_4.checked)
			size = parseInt(cyber[4][2])
	}
	else if (c == 15)
	{
		if (f.c_16.checked)
			size = parseInt(cyber[16][2])
		else if (f.c_17.checked)
			size = parseInt(cyber[17][2])
	}
	else if (c == 16)
	{
		if (f.c_15.checked)
			size = parseInt(cyber[15][2])
		else if (f.c_17.checked)
			size = parseInt(cyber[17][2])
	}
	else if (c == 17)
	{
		if (f.c_15.checked)
			size = parseInt(cyber[15][2])
		else if (f.c_16.checked)
			size = parseInt(cyber[16][2])
	}
	return(size)
}
function get_cyber_tolerance(f)
{
	var cyber_tolerance = ability_score[constitution]
	if (get_species(f) == 'Mechalus')
		cyber_tolerance += 4
	return(cyber_tolerance)
}
function add_cyber_gear_to_cookie(f, c)
{
	var cookie = get_cookie('other')
	var index = cookie.indexOf('\tc_' + c + '\t')
	if (index != -1)
		return
	if (cyber[c][3] == '-' || cyber[c][4] == '-' || cyber[c][5] == '-')
		set_cookie('other', cookie + 'c_' + c + '\t\t')
	else
		for (var x=0; x<3; x++)
			if (eval('f.c_' + c + '_r[' + x + '].checked'))
			{
				set_cookie('other', cookie + 'c_' + c + '\t' + x + '\t')
				break
			}
}
function remove_others(f, a)
{
	for (var x=0; x<a.length; x++)
	{
		eval('f.c_' + a[x] + '.checked = false')
		remove_cyber_gear_from_cookie(a[x])
	}
}
function remove_cyber_gear_from_cookie(c)
{
	var cookie = get_cookie('other')
	index = cookie.indexOf('\tc_' + c + '\t')
	if (index == -1)
		return
	var before = ''
	if (index > 0)
		before = cookie.substring(0, index)
	var index2 = cookie.indexOf('\t', index+1)
	var index3 = cookie.indexOf('\t', index2+1)
	var after = cookie.substring(index3)
	set_cookie('other', before+after)
}
function set_cyber_gear_cost(name)
{
	var f = parent.frames[0].document.forms[0]
	if (get_species(f) == 'Mechalus' && name == 'c_10_r')
	{
		f.c_10_r[1].checked = true
		return
	}
	var token = name.split('_')
	if (!eval('f.' + token[0] + '_' + token[1] + '.checked'))
		return
	check_cyber_gear(f)
	for (var i=0; i<3; i++)
		if (eval('f.' + name + '[' + i + '].checked'))
		{
			set_cyber_gear_cost_in_cookie(token[1], i)
			break
		}
}
function set_cyber_gear_cost_in_cookie(c, i)
{
	var cookie = get_cookie('other')
	var index  = cookie.indexOf('\tc_' + c + '\t')
	var index2 = cookie.indexOf('\t', index+1)
	var index3 = cookie.indexOf('\t', index2+1)
	var before = cookie.substring(0, index2+1)
	var after  = cookie.substring(index3)
	set_cookie('other', before + i + after)
}
function check_cyber_gear(f)
{
	check_battleklaw(f)
	check_cyberlimb(f)
	check_muscleplus(f)
	check_subdermal_weapon_mount(f)
}
function check_battleklaw(f)
{
	if (f.c_0.checked && f.c_0_r[2].checked && !(f.c_22.checked && f.c_6.checked))
	{
		alert('An Amazing BattleKlaw requires both an Exoskeleton and a Cyberlimb!\nTake an Ordinary BattleKlaw instead...')
		f.c_0_r[0].checked = true
		set_cyber_gear_cost_in_cookie(0, 0)
	}
}
function check_cyberlimb(f)
{
	if (f.c_6.checked && (f.c_6_r[1].checked || f.c_6_r[2].checked) && !f.c_22.checked)
	{
		var quality = (f.c_6_r[1].checked ? 'A Good' : 'An Amazing')
		alert(quality + ' Cyberlimb requires an Exoskeleton!\nTake an Ordinary Cyberlimb instead...')
		f.c_6_r[0].checked = true
		set_cyber_gear_cost_in_cookie(6, 0)
	}
}
function check_muscleplus(f)
{
	if (f.c_9.checked && f.c_9_r[1].checked && !f.c_22.checked)
	{
		alert('Good MusclePlus requires an Exoskeleton!\nTake Ordinary MusclePlus instead...')
		f.c_9_r[0].checked = true
		set_cyber_gear_cost_in_cookie(9, 0)
	}
	else if (f.c_9.checked && f.c_9_r[2].checked && !(f.c_22.checked && f.c_6.checked))
	{
		alert('Amazing MusclePlus requires both an Exoskeleton and a Cyberlimb!\nTake Ordinary MusclePlus instead...')
		f.c_9_r[0].checked = true
		set_cyber_gear_cost_in_cookie(9, 0)
	}
}
function check_subdermal_weapon_mount(f)
{
	if (f.c_16.checked && !f.c_6.checked)
	{
		alert('A Good Subdermal Weapon Mount requires a Cyberlimb!\nTake an Ordinary Subdermal Weapon Mount instead...')
		f.c_16.checked = false
		remove_cyber_gear_from_cookie(16)
		f.c_15.checked = true
		add_cyber_gear_to_cookie(f, 15)
	}
	else if (f.c_17.checked && !(f.c_22.checked && f.c_6.checked))
	{
		alert('An Amazing Subdermal Weapon Mount requires both an Exoskeleton and a Cyberlimb!\nTake an Ordinary Subdermal Weapon Mount instead...')
		f.c_17.checked = false
		remove_cyber_gear_from_cookie(17)
		f.c_15.checked = true
		add_cyber_gear_to_cookie(f, 15)
	}
}
function check_resorts()
{
	if (last_resorts < 1)
		alert('This hero does not have any last resorts!')
	else
		window.open('lresorts.htm', 'lresorts', 'width=340,height=255')
}
function check_benefits()
{
	var f = parent.frames[0].document.forms[0]
	var token = get_cookie('info').split('\t')
	var a_points = parseInt(token[49])
	var level = get_level(a_points)
	var prof = f.i_4.selectedIndex
	var found = false
	for (x=0; x<achievement_benefit.length; x++)
		if (level >= achievement_benefit[x][2+2*prof])
		{
			found = true
			break
		}
	if (!found)
		alert('Sorry, your hero is not eligible for any achievement benefits.')
	else
		window.open('achieveb.htm', 'achieveb', 'width=480,height=360,scrollbars')
}
function remove_benefit_from_cookie(cookie, index)
{
	var before = ''
	if (index > 0)
		before = cookie.substring(0, index)
	var index2 = cookie.indexOf('\t', index+1)
	var index3 = cookie.indexOf('\t', index2+1)
	var after = cookie.substring(index3)
	set_cookie('other', before+after)
}
