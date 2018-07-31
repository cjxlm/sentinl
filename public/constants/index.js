import { uiModules } from 'ui/modules';
import common from './common';
import emailWatcherAdvanced from './email_watcher_advanced';
import emailWatcherWizard from './email_watcher_wizard';
import reportWatcher from './report_watcher';
import watcherScript from './watcher_script';
import api from './api';

const module = uiModules.get('apps/sentinl', []);
module
  .constant('COMMON', common)
  .constant('EMAILWATCHERADVANCED', emailWatcherAdvanced)
  .constant('EMAILWATCHERWIZARD', emailWatcherWizard)
  .constant('REPORTWATCHER', reportWatcher)
  .constant('API', api)
  .constant('WATCHERSCRIPT', watcherScript);
