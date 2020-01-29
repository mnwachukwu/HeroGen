////////////////////////////////////////////////////////////////
//                                                            //
// HeroGen (an ALTERNITY Character Generator)                 //
// Copyright (c) 1999-2003 Mike Heffner. All rights reserved. //
//                                                            //
// ALTERNITY is a registered trademark owned by TSR, Inc.     //
// Copyright (c) 1998 TSR, Inc. All rights reserved.          //
//                                                            //
////////////////////////////////////////////////////////////////

o = parent.window.opener;

mutation = o.mutation;
mi = o.mi;
reduced = o.reduced;

only_one = new Array(28);
only_one[0]  = '|m_0|m_1|';         // hot climate, cold climate
only_one[1]  = '|m_3|m_4|';         // thin atmosphere, thick atmosphere
only_one[2]  = '|m_6|m_38|m_55|';   // adrenal control, increased metabolism, hyper metabolism
only_one[3]  = '|m_8|m_25|m_45|';   // dermal reinforcement, dermal armor, dermal plating
only_one[4]  = '|m_12|m_30|m_52|';  // improved healing, enhanced healing, hyper healing
only_one[5]  = '|m_13|m_31|m_53|';  // improved immunity, enhanced immunity, hyper immunity
only_one[6]  = '|m_11|m_29|m_51|';  // improved durability, enhanced durability, hyper durability
only_one[7]  = '|m_16|m_34|m_57|';  // improved reflexes, enhanced reflexes, hyper reflexes
only_one[8]  = '|m_17|m_35|m_58|';  // improved senses, enhanced senses, hyper senses
only_one[9]  = '|m_39|m_61|';       // natural attack, imp. natural attack
only_one[10] = '|m_9|m_27|m_49|';   // improved CON, enhanced CON, hyper CON
only_one[11] = '|m_10|m_28|m_50|';  // improved DEX, enhanced DEX, hyper DEX
only_one[12] = '|m_14|m_32|m_54|';  // improved INT, enhanced INT, hyper INT
only_one[13] = '|m_15|m_33|m_56|';  // improved PER, enhanced PER, hyper PER
only_one[14] = '|m_18|m_36|m_59|';  // improved STR, enhanced STR, hyper STR
only_one[15] = '|m_19|m_37|m_60|';  // improved WIL, enhanced WIL, hyper WIL
only_one[16] = '|m_64|m_77|m_91|';  // environmental sensitivity, slight/moderate/extreme (hot climate)
only_one[17] = '|m_65|m_78|m_92|';  // environmental sensitivity, slight/moderate/extreme (cold climate)
only_one[18] = '|m_66|m_79|m_93|';  // environmental sensitivity, slight/moderate/extreme (arid climate)
only_one[19] = '|m_67|m_80|m_94|';  // environmental sensitivity, slight/moderate/extreme (light gravity)
only_one[20] = '|m_68|m_81|m_95|';  // environmental sensitivity, slight/moderate/extreme (high gravity)
only_one[21] = '|m_69|m_82|m_96|';  // environmental sensitivity, slight/moderate/extreme (water)
only_one[22] = '|m_71|m_85|m_99|';  // reduced ability score, slight/moderate/extreme
only_one[23] = '|m_73|m_88|m_100|'; // temporary weakness, slight/moderate/extreme
only_one[24] = '|m_76|m_89|m_90|';  // weak immunity, wild immunity, deadly immunity
only_one[25] = '|m_83|m_101|';      // inefficient metabolism, weak metabolism
only_one[26] = '|m_84|m_98|';       // minor physical change, major physical change
only_one[27] = '|m_87|m_97|';       // susceptible to damage, highly susceptible to damage

incompatible = new Array(7);
incompatible[0] = '|m_0|m_64|m_77|m_91|';            // hot climate
incompatible[1] = '|m_1|m_65|m_78|m_92|';            // cold climate
incompatible[2] = '|m_2|m_66|m_79|m_93|';            // arid climate
incompatible[3] = '|m_22|m_75|';                     // toxin tolerance, toxin intolerance
incompatible[4] = '|m_13|m_31|m_53|m_76|m_89|m_90|'; // improved immunity, enhanced immunity, hyper immunity, weak immunity, wild immunity, deadly immunity
incompatible[5] = '|m_6|m_38|m_55|m_83|m_101|';      // adrenal control, increased metabolism, hyper metabolism, inefficient metabolism, weak metabolism
incompatible[6] = '|m_16|m_34|m_57|m_86|';           // improved reflexes, enhanced reflexes, hyper reflexes, slow reflexes

radios = '|m_5|1|m_39|1|m_61|1|m_62|2|m_87|1|m_97|1|';
// adaptation (gravity), natural attack, imp. natural attack, poison attack, susceptible to damage, highly susceptible to damage

env_sens_grav = new Array(67,80,94);

wild_mutation = new Array(6,24,26,38,39,44,55,61);
// adrenal control, acid touch, electric aura, increased metabolism, natural attack,
// chameleon flesh, hyper metabolism, imp. natural attack
wm = mutation.length-1; // make sure it's the last mutation in the array!

function load_mutation_info()
{
  var f = new Array(3);
  for (var x=0; x<f.length; x++)
    f[x] = parent.frames[x].document.forms[0];
  var cookie = o.get_cookie('info');
  var token = cookie.split('\t');
  for (var x=mi; x<=mi+1; x++)
  {
    eval('f[0].i_' + x + '[' + token[x] + '].checked = true');
    eval('f[0].i_' + x + '[' + (1-token[x]) + '].checked = false');
  }
  set_mutation_points('i_' + mi, false);
  for (x=mi+2; x<=mi+3; x++)
    eval('f[0].i_' + x + '.selectedIndex = ' + parseInt(token[x]));
  var reduced_ability = '';
  var cookie = o.get_cookie('other');
  var token = cookie.split('\t');
  var x = 1;
  while (x < token.length)
  {
    if (token[x].charAt(0) == 'm')
	{
	  var tkn = token[x].split('_');
	  var type = mutation[tkn[1]][0];
	  eval('f[' + type + '].' + token[x] + '.checked = true');
	  var index = radios.indexOf('|' + token[x] + '|');
	  if (index > -1)
	  {
	    index = radios.indexOf('|', index+1) + 1;
		var len = radios.charAt(index);
	    for (var z=0; z<len; z++)
		  eval('f[' + type + '].' + token[x] + '_' + z + '_' + len + '[' + token[x+1].charAt(z) + '].checked = true');
	  }
	  if (f[1].m_5_0_1[0].checked)
	    mutation[5][2] = 'DEX';
	  else
	    mutation[5][2] = 'STR';
	  for (var i=0; i<reduced.length; i++)
	    if (tkn[1] == reduced[i])
		{
		  reduced_ability = token[x+1];
		  break;
		}
	  x++;
	}
	x++;
  }
  set_mutation_points_left();
  populate_reduced_listboxes(f);
  populate_wild_mutation_listbox(f);
  for (var x=0; x<reduced.length; x++)
    if (eval('f[2].m_' + reduced[x] + '.checked'))
	{
	  var found = false;
	  var len = eval('f[2].m_' + reduced[x] + '_s.length');
	  for (var i=0; i<len; i++)
	    if (eval('f[2].m_' + reduced[x] + '_s.options[' + i + '].text') == reduced_ability)
		{
		  found = true;
		  eval('f[2].m_' + reduced[x] + '_s.selectedIndex = ' + i);
		  break;
		}
	  if (!found)
	    eval('f[2].m_' + reduced[x] + '_s.selectedIndex = 0');
	  save_selection('m_' + reduced[x] + '_s');
	  break;
	}
}
function toggle_mutation(name)
{
  var f = new Array(3);
  for (var x=0; x<f.length; x++)
    f[x] = parent.frames[x].document.forms[0];
  var token = name.split('_');
  var m = parseInt(token[1]);
  var type = mutation[m][0];
  var cost = mutation[m][1];
  if (eval('f[' + type + '].' + name + '.checked') && too_many_mutations(f, m))
  {
    var num = new Array(0,3,2,0,1);
	var adj = new Array('','ordinary','good','','amazing','','slight','moderate','','extreme');
	var mtype = new Array('advantageous mutation','mutation drawback');
    alert('You may only select ' + num[cost] + ' ' +  adj[5*(type-1)+cost] + ' ' + mtype[type-1] + (num[cost]==1?'':'s') + '!');
    eval('f[' + type + '].' + name + '.checked = false');
	return;
  }
  var points = eval('f[0].i_' + (mi+1+type) + '.selectedIndex') + 1;
  var points_used = get_mutation_points_used(f, type);
  if (type == 1 && !eval('f[' + type + '].' + name + '.checked'))
  {
    for (x=0; x<reduced.length; x++)
	  if (eval('f[2].m_' + reduced[x] + '.checked') && no_advantages(f))
	  {
	    alert('You must have an advantageous mutation to have ' + mutation[reduced[x]][3] + '!');
		eval('f[' + type + '].' + name + '.checked = true');
		return;
	  }
  }
  else if (type == 2 && eval('f[' + type + '].' + name + '.checked'))
  {
    for (var x=0; x<reduced.length; x++)
	  if (m == reduced[x] && no_advantages(f))
	  {
	    alert('You must have an advantageous mutation to have ' + mutation[reduced[x]][3] + '!');
		eval('f[' + type + '].m_' + reduced[x] + '.checked = false');
		return;
	  }
  }
  if (!eval('f[' + type + '].' + name + '.checked'))
  {
    if (name != 'm_' + wm && eval('f[2].m_' + wm + '.checked'))
	  for (var x=0; x<wild_mutation.length; x++)
	    if (name == 'm_' + wild_mutation[x])
		{
		  var found = false;
		  for (var y=0; y<wild_mutation.length; y++)
		    if (eval('f[1].m_' + wild_mutation[y] + '.checked'))
			{
			  found = true;
			  break;
			}
		  if (!found)
		  {
		    alert('You may not uncheck this mutation while you have Wild Mutation!');
			eval('f[1].' + name + '.checked = true');
			return;
		  }
		}
    eval('f[0].mpl_' + type + '.value = ' + (points-points_used));
	delete_from_cookie(name);
	populate_reduced_listboxes(f);
	populate_wild_mutation_listbox(f);
    return;
  }
  for (var x=0; x<incompatible.length; x++)
    if (incompatible[x].indexOf('|' + name + '|') != -1)
	{
	  var token = incompatible[x].split('|');
	  for (var i=1; i<token.length-1; i++)
	  {
	    var tkn = token[i].split('_');
	    if (token[i] != name && mutation[tkn[1]][0] != type &&
		    eval('f[' + mutation[tkn[1]][0] + '].' + token[i] + '.checked'))
		{
		  alert('You may not have ' + mutation[m][3] + '\nwhile you have ' + mutation[tkn[1]][3] + '!');
		  eval('f[' + type + '].' + name + '.checked = false');
		  return;
		}
	  }
	}
  var gravity = new Array('light','heavy');
  if (m == 5)
  {
    for (var x=0; x<2; x++)
	  for (var i=0; i<env_sens_grav.length; i++)
	    if (eval('f[1].m_5_0_1[' + x + '].checked') && eval('f[2].m_' + (env_sens_grav[i]+x) + '.checked'))
		{
		  alert('You may not have ' + mutation[5][3] + ' (' + gravity[x] + ')\nwhile you have ' + mutation[env_sens_grav[i]+x][3] + '!');
		  f[1].m_5.checked = false;
		  return;
		}
    if (!f[1].m_5_0_1[0].checked && !f[1].m_5_0_1[1].checked)
	  f[1].m_5_0_1[0].checked = true;
  }
  for (var x=0; x<2; x++)
    for (var i=0; i<env_sens_grav.length; i++)
	  if (m == env_sens_grav[i]+x && f[1].m_5.checked && eval('f[1].m_5_0_1[' + x + '].checked'))
	  {
	    alert('You may not have ' + mutation[env_sens_grav[i]+x][3] + '\nwhile you have ' + mutation[5][3] + ' (' + gravity[x] + ')!');
		eval('f[2].m_' + (env_sens_grav[i]+x) + '.checked = false');
		return;
	  }
  var checked = '';
  for (var x=0; x<only_one.length; x++)
    if (only_one[x].indexOf('|' + name + '|') != -1)
	{
	  var token = only_one[x].split('|');
	  for (var i=1; i<token.length-1; i++)
	    if (token[i] != name && eval('f[' + type + '].' + token[i] + '.checked'))
		{
		  var tkn = token[i].split('_');
		  points_used -= mutation[tkn[1]][1];
		  checked = token[i];
		  break;
		}
	}
  if (name == 'm_' + wm && eval('f[2].m_' + wm + '.checked'))
  {
    var found = false;
    for (var x=0; x<wild_mutation.length; x++)
	  if (eval('f[1].m_' + wild_mutation[x] + '.checked'))
	  {
	    found = true;
		break;
	  }
	if (!found)
	{
      alert('You may not have Wild Mutation without one of its corresponding advantageous mutations!');
      eval('f[2].m_' + wm + '.checked = false');
	  return;
	}
  }
  if (points_used > points)
  {
    alert('You may only spend ' + points + ' ' + (type==1?'mutation':'drawback') + ' point' + (points==1?'':'s') + '!');
	eval('f[' + type + '].' + name + '.checked = false');
	return;
  }
  if (checked.length > 0)
  {
    eval('f[' + type + '].' + checked + '.checked = false');
	delete_from_cookie(checked);
  }
  eval('f[0].mpl_' + type + '.value = ' + (points-points_used));
  var c = ''
  if (radios.indexOf('|' + name + '|') > -1)
    var c = get_radio_buttons(f, m);
  var cookie = o.get_cookie('other');
  o.set_cookie('other', cookie + name + '\t' + c + '\t');
  populate_reduced_listboxes(f);
  populate_wild_mutation_listbox(f);
}
function no_advantages(f)
{
  var none = true;
  for (var x=0; x<mutation.length; x++)
  {
    if (mutation[x][0] == 2)
	  break;
	if (eval('f[1].m_' + x + '.checked'))
	{
	  none = false;
	  break;
	}
  }
  return(none);
}
function delete_from_cookie(name)
{
  var cookie = o.get_cookie('other');
  var index = cookie.indexOf('\t' + name + '\t');
  var before = '';
  if (index > 0)
    before = cookie.substring(0, index);
  var index2 = cookie.indexOf('\t', index+1);
  var index3 = cookie.indexOf('\t', index2+1);
  var after = cookie.substring(index3);
  o.set_cookie('other', before+after);
}
function too_many_mutations(f, m)
{
  var count = 0;
  var type = mutation[m][0];
  var cost = mutation[m][1];
  for (var x=0; x<mutation.length; x++)
    if (mutation[x][0] == type && eval('f[' + type + '].m_' + x + '.checked') &&
	    mutation[x][1] == cost)
	  count++;
  return((cost == 1 && count > 3) || (cost == 2 && count > 2) || (cost == 4 && count > 1));
}
function get_mutation_points_used(f, type)
{
  var points_used = 0;
  for (var x=0; x<mutation.length; x++)
    if (mutation[x][0] == type && eval('f[' + type + '].m_' + x + '.checked'))
	  points_used += mutation[x][1];
  return(points_used);
}
function set_mutation_points(name, from_form)
{
  var f = new Array(3);
  for (var x=0; x<f.length; x++)
    f[x] = parent.frames[x].document.forms[0];
  var points = new Array(4,4);
  if (eval('f[0].i_' + mi + '[0].checked') && eval('f[0].i_' + (mi+1) + '[1].checked'))
  {
    points[0] = 5;
	points[1] = 5;
  }
  else if (eval('f[0].i_' + mi + '[1].checked') && eval('f[0].i_' + (mi+1) + '[0].checked'))
  {
    points[0] = 6;
	points[1] = 5;
  }
  else if (eval('f[0].i_' + mi + '[1].checked') && eval('f[0].i_' + (mi+1) + '[1].checked'))
  {
    points[0] = 7;
	points[1] = 6;
  }
  var points_used = new Array(get_mutation_points_used(f,1),get_mutation_points_used(f,2));
  if (points_used[0] > points[0])
  {
    alert('This combination allows a maximum of ' + points[0] + ' mutation points,\nbut you already have ' + points_used[0] + ' allocated!');
	restore_mutation_origin(f, name);
	return;
  }
  if (points_used[1] > points[1])
  {
    alert('This combination allows a maximum of ' + points[1] + ' drawback points,\nbut you already have ' + points_used[1] + ' allocated!');
	restore_mutation_origin(f, name);
	return;
  }
  for (var x=1; x<3; x++)
  {
    var selectedIndex = eval('f[0].i_' + (mi+1+x) + '.selectedIndex');
    var len = eval('f[0].i_' + (mi+1+x) + '.length');
    for (var i=len-1; i>=4; i--)
	  eval('f[0].i_' + (mi+1+x) + '.options[' + i + '] = null;');
	for (var i=4; i<points[x-1]; i++)
	  eval('f[0].i_' + (mi+1+x) + '.options[' + i + '] = new Option(' + (i+1) + ');');
	if (selectedIndex > points[x-1]-1)
	  eval('f[0].i_' + (mi+1+x) + '.selectedIndex = ' + parseInt(points[x-1]-1));
	else
	  eval('f[0].i_' + (mi+1+x) + '.selectedIndex = ' + selectedIndex);
  }
  if (from_form)
  {
    set_mutation_points_left();
	set_info_cookie(f);
  }
}
function set_info_cookie(f)
{
  var cookie = o.get_cookie('info');
  var token = cookie.split('\t');
  for (var x=mi; x<=mi+1; x++)
    if (eval('f[0].i_' + x + '[0].checked'))
	  token[x] = 0;
	else
	  token[x] = 1;
  for (var x=mi+2; x<=mi+3; x++)
    token[x] = eval('f[0].i_' + x + '.selectedIndex');
  var cookie = '';
  for (var x=0; x<token.length; x++)
    cookie += '\t' + token[x];
  o.set_cookie('info', cookie.substring(1));
}
function restore_mutation_origin(f, name)
{
  if (eval('f[0].' + name + '[0].checked'))
    eval('f[0].' + name + '[1].checked = true');
  else
    eval('f[0].' + name + '[0].checked = true');
}
function check_mutation_points(name, old_index)
{
  var f = new Array(3);
  for (var x=0; x<f.length; x++)
    f[x] = parent.frames[x].document.forms[0];
  var token = name.split('_');
  var type = parseInt(token[1]) - mi - 1;
  var points_used = get_mutation_points_used(f, type);
  if (points_used > eval('f[0].' + name + '.selectedIndex') + 1)
  {
    alert('You have already allocated ' + points_used + ' ' + (type==1?'mutation':'drawback') + ' points!');
	eval('f[0].' + name + '.selectedIndex = ' + old_index);
  }
  else
  {
    set_mutation_points_left();
	set_info_cookie(f);
  }
}
function set_mutation_points_left()
{
  var f = new Array(3);
  for (var x=0; x<f.length; x++)
    f[x] = parent.frames[x].document.forms[0];
  for (var x=1; x<3; x++)
  {
    var points = eval('f[0].i_' + (mi+1+x) + '.selectedIndex') + 1;
	var points_used = get_mutation_points_used(f, x);
	eval('f[0].mpl_' + x + '.value = ' + (points-points_used));
  }
}
function toggle_radio_button(name)
{
  var f = new Array(3);
  for (var x=0; x<f.length; x++)
    f[x] = parent.frames[x].document.forms[0];
  var token = name.split('_');
  if (!eval('f[' + mutation[token[1]][0] + '].m_' + token[1] + '.checked'))
    return(false);
  if (name.substring(0,4) == 'm_5_')
  {
    var gravity = new Array('light','heavy');
    for (var x=0; x<2; x++)
	  for (var i=0; i<env_sens_grav.length; i++)
	    if (eval('f[1].m_5_0_1[' + x + '].checked') && eval('f[2].m_' + (env_sens_grav[i]+x) + '.checked'))
		{
		  alert('You may not have ' + mutation[5][3] + ' (' + gravity[x] + ')\nwhile you have ' + mutation[env_sens_grav[i]+x][3] + '!');
		  eval('f[1].m_5_0_1[' + x + '].checked = false');
		  eval('f[1].m_5_0_1[' + (1-x) + '].checked = true');
		  return(false);
		}
	if (f[1].m_5_0_1[0].checked)
	  mutation[5][2] = 'DEX';
	else
	  mutation[5][2] = 'STR';
	populate_reduced_listboxes(f);
  }
  var cookie = o.get_cookie('other');
  var index = cookie.indexOf('\tm_' + token[1] + '\t');
  index = cookie.indexOf('\t', index+1);
  var index2 = cookie.indexOf('\t', index+1);
  var right = cookie.substring(index2);
  var cookie = cookie.substring(0, index+1);
  cookie += get_radio_buttons(f, token[1]);
  cookie += right;
  o.set_cookie('other', cookie);
  return(true);
}
function get_radio_buttons(f, m)
{
  var rb = '';
  var index = radios.indexOf('|m_' + m + '|');
  var index = radios.indexOf('|', index+1) + 1;
  var len = parseInt(radios.charAt(index));
  var type = mutation[m][0];
  for (var x=0; x<len; x++)
  {
    var l = eval('f[' + type + '].m_' + m + '_' + x + '_' + len + '.length');
    for (var y=0; y<l; y++)
	  if (eval('f[' + type + '].m_' + m + '_' + x + '_' + len + '[' + y + '].checked'))
	  {
	    rb += y;
		break;
	  }
  }
  return(rb);
}
function populate_reduced_listboxes(f)
{
  var s = '|';
  for (var x=0; x<mutation.length; x++)
  {
    if (mutation[x][0] == 2)
	  break;
	if (eval('f[1].m_' + x + '.checked') && s.indexOf('|' + mutation[x][2] + '|') == -1)
	  s += mutation[x][2] + '|';
  }
  var mutant_abilities = '';
  var ability = new Array('DEX','CON','WIL','STR','PER','INT');
  var related_ability = o.ability;
  for (var x=0; x<ability.length; x++)
  {
    if (s.indexOf('|' + ability[x] + '|') != -1)
	  mutant_abilities += '|' + related_ability[x].substring(0,3).toUpperCase();
  }
  var token = mutant_abilities.split('|');
  for (var x=0; x<reduced.length; x++)
  {
	var selectedIndex = eval('f[2].m_' + reduced[x] + '_s.selectedIndex');
	var text = ''
	if (selectedIndex != -1) {
	  text = eval('f[2].m_' + reduced[x] + '_s.options[' + selectedIndex + '].text');
	}
    var len = eval('f[2].m_' + reduced[x] + '_s.length');
	for (var i=len-1; i>=0; i--)
	  eval('f[2].m_' + reduced[x] + '_s.options[' + i + '] = null');
	for (var i=1; i<token.length; i++)
	{
	  eval('f[2].m_' + reduced[x] + '_s.options[' + (i-1) + '] = new Option(\'' + token[i] + '\')');
	  if (token[i] == text || i == 1)
	    eval('f[2].m_' + reduced[x] + '_s.selectedIndex = ' + (i-1));
	}
	save_selection('m_' + reduced[x] + '_s');
  }
}
function populate_wild_mutation_listbox(f)
{
  var selectedIndex = eval('f[2].m_' + wm + '_s.selectedIndex');
  var text = ''
  if (selectedIndex != -1) {
    text = eval('f[2].m_' + wm + '_s.options[' + selectedIndex + '].text');
  }
  var len = eval('f[2].m_' + wm + '_s.length');
  for (var x=len-1; x>=0; x--)
    eval('f[2].m_' + wm + '_s.options[' + x + '] = null');
  var item = 0;
  for (var x=0; x<wild_mutation.length; x++)
    if (eval('f[1].m_' + wild_mutation[x] + '.checked'))
	{
	  eval('f[2].m_' + wm + '_s.options[' + (item) + '] = new Option(\'' + mutation[wild_mutation[x]][3] + '\')');
	  if (mutation[wild_mutation[x]][3] == text || item == 0)
	    eval('f[2].m_' + wm + '_s.selectedIndex = ' + item);
	  item++;
	}
	save_selection('m_' + wm + '_s');
}
function save_selection(name)
{
  var f = new Array(3);
  for (var x=0; x<f.length; x++)
    f[x] = parent.frames[x].document.forms[0];
  var token = name.split('_');
  if (!eval('f[2].m_' + token[1] + '.checked'))
    return(false);
  var cookie = o.get_cookie('other');
  var index = cookie.indexOf('\tm_' + token[1] + '\t');
  index = cookie.indexOf('\t', index+1);
  var index2 = cookie.indexOf('\t', index+1);
  var right = cookie.substring(index2);
  var cookie = cookie.substring(0, index+1);
  var selectedIndex = eval('f[2].' + name + '.selectedIndex');
  cookie += eval('f[2].' + name + '.options[selectedIndex].text');
  cookie += right;
  o.set_cookie('other', cookie);
  return(true);
}
