////////////////////////////////////////////////////////////////
//                                                            //
// HeroGen (an ALTERNITY Character Generator)                 //
// Copyright (c) 1999-2003 Mike Heffner. All rights reserved. //
//                                                            //
// ALTERNITY is a registered trademark owned by TSR, Inc.     //
// Copyright (c) 1998 TSR, Inc. All rights reserved.          //
//                                                            //
////////////////////////////////////////////////////////////////

ci = 0
ci_rec = 0
custom_item = new Array()
fields = 0
oldValue = new Array()
function set_focus()
{
  document.forms[0].elements[0].focus();
}
function status_custom_items()
{
  window.defaultStatus = (ci_rec+1) + ' of ' + ci;
}
function selection(x)
{
  return(selections.indexOf('|' + x + '|') != -1);
}
function get_custom_items()
{
  var cookie = window.opener.get_cookie('custom');
  custom_item = new Array();
  fields = window.opener.get_length(type.charAt(0)) - 1;
  oldValue = new Array(fields);
  ci = 0;
  var token = cookie.split('\t');
  var x = 1;
  while (x < token.length-1)
    if (token[x] == type.charAt(0))
    {
	  custom_item[ci] = new Array(fields);
	  for (var i=0; i<fields; i++)
	    custom_item[ci][i] = token[x+i+1];
	  ci++;
      x += (fields+1);
    }
    else
	  x += window.opener.get_length(token[x]);
  var d = document.forms[0];
  var e = document.forms[0].elements;
  if (ci > 0)
    for (var x=0; x<fields; x++)
	{
	  if (!selection(x))
        e[x].value = custom_item[ci_rec][x];
	  else
	  {
	    var len = eval('d.s_' + x + '.length');
	    for (var i=0; i<len; i++)
		  if (eval('d.s_' + x + '[' + i + '].value') == custom_item[ci_rec][x])
		  {
		    eval('d.s_' + x + '.selectedIndex = ' + i);
			break;
		  }
	  }
	  oldValue[x] = custom_item[ci_rec][x];
	}
  else
  {
    ci_rec = -1;
	for (var x=0; x<fields; x++)
	{
	  if (!selection(x))
	  {
	    e[x].value = '';
		oldValue[x] = '';
	  }
	  else
	  {
	    eval('d.s_' + x + '.selectedIndex = 0');
		oldValue[x] = eval('d.s_' + x + '[0].value');
	  }
	}
  }
  status_custom_items();
}
function prev_custom_item()
{
  if (ci_rec < 1)
    alert('You are at the first record!');
  else
  {
    ci_rec--;
	get_custom_items();
  }
}
function next_custom_item()
{
  if (ci_rec == ci-1)
    alert('You are at the last record!');
  else
  {
    ci_rec++;
	get_custom_items();
  }
}
function new_custom_item()
{
  var x = 0;
  for (x=0; x<ci; x++)
    if (custom_item[x][0].length == 0)
	  break;
  if (x < ci)
    ci_rec = x;
  else
  {
    ci_rec = ci;
	var d = document.forms[0];
	var e = document.forms[0].elements;
    var cookie = window.opener.get_cookie('custom');
	cookie += type.charAt(0) + '\t';
	for (var i=0; i<fields; i++)
	{
	  if (!selection(i) && ci == 0)
	    cookie += e[i].value;
	  else if (selection(i))
	  {
	    var len = eval('d.s_' + i + '.length');
		for (var j=0; j<len; j++)
		  if (eval('d.s_' + i + '[' + j + '].' + (ci == 0 ? 's' : 'defaultS') + 'elected'))
		  {
		    cookie += eval('d.s_' + i + '[' + j + '].value');
			break;
		  }
	  }
	  cookie += '\t';
	}
    window.opener.set_cookie('custom', cookie);
  }
  get_custom_items();
  document.forms[0].elements[0].focus();
}
function delete_custom_item()
{
  if (ci == 0)
    alert('There is not a record to delete!');
  else if (confirm('Delete ' + type + ' "' + custom_item[ci_rec][0] + '"?'))
  {
    var cookie = window.opener.get_cookie('custom');
	var token = cookie.split('\t');
	var x = 1;
	while (x < token.length-1)
	  if (token[x] == type.charAt(0))
	  {
	    if (token[x+1] == custom_item[ci_rec][0])
		{
		  cookie = '\t';
		  for (var i=1; i<x; i++)
		    cookie += token[i] + '\t';
		  for (var i=x+fields+1; i<token.length-1; i++)
		    cookie += token[i] + '\t';
		  window.opener.set_cookie('custom', cookie);
		  if (ci_rec > 0)
		    ci_rec--;
		  get_custom_items();
		  break;
		}
		else
		  x += (fields+1);
	  }
	  else
	    x += window.opener.get_length(token[x]);
  }
}
function revert_custom_item()
{
  if (ci_rec == -1)
    return;
  var d = document.forms[0];
  for (var x=0; x<fields; x++)
  {
    if (!selection(x))
	  d.elements[x].value = oldValue[x];
	else
	{
	  var len = eval('d.s_' + x + '.length');
	  for (var i=0; i<len; i++)
	    if (eval('d.s_' + x + '[' + i + '].value') == oldValue[x])
		{
		  eval('d.s_' + x + '.selectedIndex = ' + i);
		  break;
		}
	}
	update_custom_item(x);
  }
}
function update_custom_item(ele)
{
  if (ci_rec == -1)
  {
    new_custom_item();
	return;
  }
  var e = document.forms[0].elements;
  if (ele == 0)
    for (var x=0; x<ci; x++)
	  if (x != ci_rec && e[0].value == custom_item[x][0])
	  {
	    alert('Duplicate ' + type + ' name in record ' + (x+1) + '!');
		e[0].value = custom_item[ci_rec][0];
		e[0].focus();
		return;
	  }
  var d = document.forms[0];
  var e = document.forms[0].elements;
  var cookie = window.opener.get_cookie('custom');
  var token = cookie.split('\t');
  var x = 1;
  while (x < token.length-1)
    if (token[x] == type.charAt(0))
	{
	  if (token[x+1] == custom_item[ci_rec][0])
	  {
	    if (!selection(ele))
		  token[x+1+ele] = e[ele].value;
		else
		{
		  var selectedIndex = eval('d.s_' + ele + '.selectedIndex');
		  token[x+1+ele] = eval('d.s_' + ele + '[' + selectedIndex + '].value');
		}
		custom_item[ci_rec][ele] = token[x+1+ele];
		cookie = '\t';
		for (var i=1; i<token.length-1; i++)
		  cookie += token[i] + '\t';
		window.opener.set_cookie('custom', cookie);
		break;
	  }
	  else
	    x += (fields+1);
	}
	else
	  x += window.opener.get_length(token[x]);
}
function write_buttons()
{
  var d = window.document;
  d.writeln('<table width="100%">');
  d.writeln('<tr>');
  d.writeln('<td align=center>');
  d.writeln('<input type="button" value=" < "    onClick="prev_custom_item()">');
  d.writeln('<input type="button" value=" > "    onClick="next_custom_item()">');
  d.writeln('<input type="button" value=" New "  onClick="new_custom_item()">');
  d.writeln('<input type="button" value="Delete" onClick="delete_custom_item()">');
  d.writeln('<input type="button" value="Revert" onClick="revert_custom_item()">');
  d.writeln('<input type="button" value="Close"  onClick="window.close(); window.opener.chargen()">');
  d.writeln('</td>');
  d.writeln('</tr>');
  d.writeln('</table>');
}
