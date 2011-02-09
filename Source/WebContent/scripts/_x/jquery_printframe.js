/* 
   Copyright 2011 Tim Plaisted, Queensland University of Technology

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   // print frame
   // Version: 0.3 */
jQuery(function($){
	$("body").prepend('<span style="padding: 4px 0pt 0pt 93%; display: block;" id="printlink"><a href="#" onclick="window.print();return false;" target="_blank" class="printlink breadcrumbs">Print Frame</a></span>');
});