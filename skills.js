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

ranks = 12;

sk = 0;

function load_skill_info(broad)
{
  sk = broad;
  set_header(broad);
  var f = parent.frames[1].document.forms[0];
  var p = o.parent.frames[0].document.forms[0];
  uncheck_all_broad_skills(f);
  o.get_cookies();
  o.adjust_ability_score(p);
  var s = p.i_2.selectedIndex;
  o.broad_skills_selected = 0;
  var all_skills = '\t';
  var token = o.cookiee[o.skills].split('\t');
  var x = 1;
  while (x < token.length-1)
  {
    var index = token[x].split('_');
	if (index.length == 3)
	{
	  if (index[1] == sk)
	  {
	    eval('f.' + token[x] + '.checked = true;');
		set_null_specialty_listboxes(token[x]);
	  }
	  o.broad_skills_selected++;
	  for (var i=0; i<6; i++)
	    if (token[x] == o.free_broad_skill[s][i])
		{
		  o.broad_skills_selected--;
		  break;
		}
	  x++;
	}
	else if (index.length == 4)
	{
	  if (index[1] == sk)
	  {
	    var selectedIndex = token[x+1];
		eval('f.' + token[x] + '.selectedIndex = ' + selectedIndex + ';');
	  }
	  x += 2;
	}
	else if (index.length == 5)
	{
	  if (index[1] == sk)
	  {
	    var userText = token[x+1].substring(1);
		eval('f.' + token[x] + '.value = "' + userText + '";');
	  }
	  x += 2;
	}
	else
	  x += 2;
  }
  if (sk == o.personality)
    populate_entertainment();
  var species = o.get_species(p);
  var profession = p.i_4.options[p.i_4.selectedIndex].value;
  o.skill_points_spent = o.get_skill_points_spent(p, profession);
  var a = new Array(2);
  a = o.get_broad_skills_and_skill_points_available(p,species,profession);
  o.broad_skills = a[0];
  o.skill_points_available = a[1];
  //update_skill_points();
}
function get_all_skills()
{
  var all_skills = '\t';
  for (var x=0; x<o.broad.length; x++)
    for (var y=0; y<o.broad[x].length; y++)
	{
	  if (o.have_skill('s_' + x + '_' + y))
	  {
	    var token = o.broad[x][y].split('|');
		if (token[0] != 'Entertainment')
		  all_skills += token[0] + '\t';
	  }
	  for (var z=0; z<o.skill[x][y].length; z++)
	    if (o.have_skill('s_' + x + '_' + y + '_' + z))
		{
		  var token = o.broad[x][y].split('|');
		  if (token[0] != 'Entertainment')
			all_skills += token[0] + '-' + o.get_specialty_skill_name(x, y, z) + '\t';
		}
	}
  return(all_skills);
}
function populate_entertainment()
{
  var f = parent.frames[1].document.forms[0];
  o.get_cookies();
  all_skills = get_all_skills();
  var len = o.skill[5][2].length;
  for (var x=0; x<len; x++)
  {
    var item = 's_5_2_' + x + '_s_0';
	eval('f.' + item + '.options[0].text = ""');
	var l = eval('f.' + item + '.length');
	for (var i=l-1; i>0; i--)
	  eval('f.' + item + '.options[' + i + '] = null');
	eval('f.' + item + '.selectedIndex = 0');
	if (eval('f.s_5_2_' + x + '.selectedIndex') > 0)
	{
	  var selection = o.skill_text(item);
	  var token = all_skills.split('\t');
	  var i = 0;
	  var opt = 0;
	  while (++i < token.length-1)
	  {
	    var found = false;
	    for (var z=0; z<len; z++)
		{
		  if (z == x)
		    continue;
		  if (token[i] == o.skill_text('s_5_2_' + z + '_s_0'))
		  {
		    found = true;
			break;
		  }
		}
		if (!found)
		{
		  eval('f.' + item + '.options[' + (++opt) + '] = new Option("' + token[i] + '");');
		  if (selection == token[i])
		    eval('f.' + item + '.selectedIndex = ' + opt);
		}
	  }
	}
	set_enhance_skill_cookie(item);
  }
}
function set_header(broad)
{
  var d = parent.frames[0].document;
  d.open();
  d.writeln('<html>');
  d.writeln('<body bgcolor="white">');
  d.writeln('<h4>' + parent.window.opener.ability[broad] + ' Skills</h4>');
  d.writeln('</body>');
  d.writeln('</html>');
  d.close();
}
function set_broad_skill_cookie(name)
{
  var f = parent.frames[1].document.forms[0];
  var checked = eval('f.' + name + '.checked');
  var s = o.parent.frames[0].document.forms[0].i_2.selectedIndex;
  var x = 0;
  for (x=0; x<6; x++)
  {
	if (name == o.free_broad_skill[s][x])
	  break;
  }
  if (x == 6 && checked)
  {
	if (++o.broad_skills_selected > o.broad_skills)
	{
	  o.broad_skills_selected--;
	  eval('f.' + name + '.checked = false');
	  alert('You may only purchase ' + o.broad_skills + ' broad skills!');
	  return;
	}
  }
  else if (x == 6 && !checked)
    o.broad_skills_selected--;
  var cookie = o.get_cookie('skills');
  var index = cookie.indexOf('\t' + name + '\t');
  if (checked && index == -1)
  {
    cookie += name + '\t';
	o.set_cookie('skills', cookie);
  }
  else if (!checked && index > -1)
  {
    var before = '';
	if (index > 0)
	  before = cookie.substring(0, index);
	var index2 = cookie.indexOf('\t', index+1);
	var after = cookie.substring(index2);
	o.set_cookie('skills', before+after);
  }
  set_null_specialty_listboxes(name);
  var token = name.split('_');
  for (var z=0; z<o.skill[token[1]][token[2]].length; z++)
	set_specialty_skill_cookie(name + '_' + z);
}
function set_null_specialty_listboxes(name)
//
// sets all listboxes under the input broad skill to '',1-12 if checked or
//   '' if unchecked
//
// called when a broad skill's box is checked/unchecked
// called by set_all_specialty_listboxes()
{
  var token = name.split('_');
  var x = token[1];
  var y = token[2];
  var f = parent.frames[1].document.forms[0];
  var checked = eval('f.' + name + '.checked');
  if (checked)
    set_specialty_listboxes(f, x, y);
  else
    null_specialty_listboxes(f, x, y);
}
function set_specialty_listboxes(f, x, y)
{
  for (var i=1; i<=ranks; i++)
    for (var j=0; j<o.skill[x][y].length; j++)
	  eval('f.s_' + x + '_' + y + '_' + j + '.options[' + i + '] = new Option(' + i + ');');
}
function null_specialty_listboxes(f, x, y)
{
  for (var z=0; z<o.skill[x][y].length; z++)
  {
    for (var i=ranks; i>=1; i--)
	  eval('f.s_' + x + '_' + y + '_' + z + '.options[' + i + '] = null;');
	if (o.skill[x][y][z].indexOf('[specific]') > -1)
	  eval('f.s_' + x + '_' + y + '_' + z + '_t.value = "";');
  }
}
function uncheck_all_broad_skills(f)
{
  for (var y=0; y<o.broad[sk].length; y++)
  {
    eval('f.s_' + sk + '_' + y + '.checked = false;');
	null_specialty_listboxes(f, sk, y);
  }
}
function set_specialty_skill_cookie(name)
{
  var f = parent.frames[1].document.forms[0];
  var p = o.parent.frames[0].document.forms[0];
  var cookie = o.get_cookie('skills');
  var index = cookie.indexOf('\t' + name + '\t');
  var selectedIndex = eval('f.' + name + '.selectedIndex');
  if (index == -1 && selectedIndex > 0)
    add_specialty_to_cookie(name, index, selectedIndex);
  else if (index != -1 && selectedIndex < 1)
    remove_specialty_from_cookie(name, index);
  else if (index != -1 && selectedIndex > 0)
    update_specialty_in_cookie(name, index, selectedIndex);
  var token = name.split('_');
  var specific = o.skill[token[1]][token[2]][token[3]].indexOf('[specific]');
  if (specific > -1)
    set_specific_specialty_skill_cookie(name + '_t');
  if (selectedIndex < 1 && name == 's_0_4_1')
  {
    var fistsOfIron = 'p_8_r';
    eval('p.' + fistsOfIron + '[0].checked = true');
    eval('p.' + fistsOfIron + '[1].checked = false');  // I really shouldn't need to do this!?
    o.set_perk_flaw_cost(fistsOfIron, false);
  }
}
function set_specific_specialty_skill_cookie(name)
{
  var f = parent.frames[1].document.forms[0];
  var cookie = o.get_cookie('skills');
  var index = cookie.indexOf('\t' + name + '\t');
  var userText = eval('f.' + name + '.value');
  if (index == -1 && userText.length > 0)
    add_specialty_to_cookie(name, index, userText);
  else if (index != -1 && userText.length == 0)
    remove_specialty_from_cookie(name, index);
  else if (index != -1 && userText.length > 0)
    update_specialty_in_cookie(name, index, userText);
}
function set_enhance_skill_cookie(name)
{
  var f = parent.frames[1].document.forms[0];
  var cookie = o.get_cookie('skills');
  var index = cookie.indexOf('\t' + name + '\t');
  var selectedIndex = eval('f.' + name + '.selectedIndex');
  var selectedText = eval('f.' + name + '[' + selectedIndex + '].text');
  if (index == -1 && selectedIndex > 0)
    add_specialty_to_cookie(name, index, selectedText);
  else if (index != -1 && selectedIndex < 1)
    remove_specialty_from_cookie(name, index);
  else if (index != -1 && selectedIndex > 0)
    update_specialty_in_cookie(name, index, selectedText);
}
function add_specialty_to_cookie(name, index, value)
{
  var cookie = o.get_cookie('skills');
  var token = name.split('_');
  cookie += name + '\t' + (token.length==5?'\n':'') + value + '\t';
  o.set_cookie('skills', cookie);
}
function remove_specialty_from_cookie(name, index)
{
  var cookie = o.get_cookie('skills');
  var before = cookie.substring(0, index);
  var index2 = cookie.indexOf('\t', index+1);
  var index3 = cookie.indexOf('\t', index2+1);
  var after = cookie.substring(index3);
  o.set_cookie('skills', before + after);
}
function update_specialty_in_cookie(name, index, value)
{
  var cookie = o.get_cookie('skills');
  var token = name.split('_');
  var index2 = cookie.indexOf('\t', index+1);
  var index3 = cookie.indexOf('\t', index2+1);
  var before = cookie.substring(0, index2+1);
  var after = cookie.substring(index3);
  o.set_cookie('skills', before + (token.length==5?'\n':'') + value + after);
}
function update_skill_points()
{
  var d = parent.frames[3].document;
  d.open();
  d.writeln('<html>');
  d.writeln('<body bgcolor="white">');
  d.write  ('<center><b><font size="-1">');
  d.write  ('<a href="javascript:void(0)" onClick="return false" onMouseOver="window.status=\'This is the number of skill points you have spent\'; return true" onMouseOut="window.status=\'\'; return true">' + o.skill_points_spent + '</a>');
  d.write  (' of ');
  d.write  ('<a href="javascript:void(0)" onClick="return false" onMouseOver="window.status=\'This is the total number of skill points available\'; return true" onMouseOut="window.status=\'\'; return true">' + o.skill_points_available + '</a>');
  d.writeln('<font size="-1"></b></center>');
  d.writeln('</body>');
  d.writeln('</html>');
  d.close();
}
