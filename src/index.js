import './styles.css';


// loading the header and main content container for the page
import loadPage from './LoadPage.js';
loadPage();

// loading the file bar 
import fileBar from './LoadFileBar.js';
fileBar();

import loadFiles from './LoadFiles.js'
loadFiles();

import mainContent from './LoadTasks';
mainContent();