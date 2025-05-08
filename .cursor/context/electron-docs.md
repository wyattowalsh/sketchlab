Directory structure:
└── docs/
    ├── README.md
    ├── api-history.schema.json
    ├── breaking-changes.md
    ├── experimental.md
    ├── faq.md
    ├── glossary.md
    ├── why-electron.md
    ├── api/
    │   ├── accelerator.md
    │   ├── app.md
    │   ├── auto-updater.md
    │   ├── base-window.md
    │   ├── browser-view.md
    │   ├── browser-window.md
    │   ├── client-request.md
    │   ├── clipboard.md
    │   ├── command-line-switches.md
    │   ├── command-line.md
    │   ├── content-tracing.md
    │   ├── context-bridge.md
    │   ├── cookies.md
    │   ├── corner-smoothing-css.md
    │   ├── crash-reporter.md
    │   ├── debugger.md
    │   ├── desktop-capturer.md
    │   ├── dialog.md
    │   ├── dock.md
    │   ├── download-item.md
    │   ├── environment-variables.md
    │   ├── extensions-api.md
    │   ├── extensions.md
    │   ├── global-shortcut.md
    │   ├── in-app-purchase.md
    │   ├── incoming-message.md
    │   ├── ipc-main-service-worker.md
    │   ├── ipc-main.md
    │   ├── ipc-renderer.md
    │   ├── menu-item.md
    │   ├── menu.md
    │   ├── message-channel-main.md
    │   ├── message-port-main.md
    │   ├── native-image.md
    │   ├── native-theme.md
    │   ├── navigation-history.md
    │   ├── net-log.md
    │   ├── net.md
    │   ├── notification.md
    │   ├── parent-port.md
    │   ├── power-monitor.md
    │   ├── power-save-blocker.md
    │   ├── process.md
    │   ├── protocol.md
    │   ├── push-notifications.md
    │   ├── safe-storage.md
    │   ├── screen.md
    │   ├── service-worker-main.md
    │   ├── service-workers.md
    │   ├── session.md
    │   ├── share-menu.md
    │   ├── shell.md
    │   ├── system-preferences.md
    │   ├── touch-bar-button.md
    │   ├── touch-bar-color-picker.md
    │   ├── touch-bar-group.md
    │   ├── touch-bar-label.md
    │   ├── touch-bar-other-items-proxy.md
    │   ├── touch-bar-popover.md
    │   ├── touch-bar-scrubber.md
    │   ├── touch-bar-segmented-control.md
    │   ├── touch-bar-slider.md
    │   ├── touch-bar-spacer.md
    │   ├── touch-bar.md
    │   ├── tray.md
    │   ├── utility-process.md
    │   ├── view.md
    │   ├── web-contents-view.md
    │   ├── web-contents.md
    │   ├── web-frame-main.md
    │   ├── web-frame.md
    │   ├── web-request.md
    │   ├── web-utils.md
    │   ├── webview-tag.md
    │   ├── window-open.md
    │   └── structures/
    │       ├── base-window-options.md
    │       ├── bluetooth-device.md
    │       ├── browser-window-options.md
    │       ├── certificate-principal.md
    │       ├── certificate.md
    │       ├── cookie.md
    │       ├── cpu-usage.md
    │       ├── crash-report.md
    │       ├── custom-scheme.md
    │       ├── desktop-capturer-source.md
    │       ├── display.md
    │       ├── extension-info.md
    │       ├── extension.md
    │       ├── file-filter.md
    │       ├── file-path-with-headers.md
    │       ├── filesystem-permission-request.md
    │       ├── gpu-feature-status.md
    │       ├── hid-device.md
    │       ├── input-event.md
    │       ├── ipc-main-event.md
    │       ├── ipc-main-invoke-event.md
    │       ├── ipc-main-service-worker-event.md
    │       ├── ipc-main-service-worker-invoke-event.md
    │       ├── ipc-renderer-event.md
    │       ├── jump-list-category.md
    │       ├── jump-list-item.md
    │       ├── keyboard-event.md
    │       ├── keyboard-input-event.md
    │       ├── media-access-permission-request.md
    │       ├── memory-info.md
    │       ├── memory-usage-details.md
    │       ├── mime-typed-buffer.md
    │       ├── mouse-input-event.md
    │       ├── mouse-wheel-input-event.md
    │       ├── navigation-entry.md
    │       ├── notification-action.md
    │       ├── notification-response.md
    │       ├── offscreen-shared-texture.md
    │       ├── open-external-permission-request.md
    │       ├── payment-discount.md
    │       ├── permission-request.md
    │       ├── point.md
    │       ├── post-body.md
    │       ├── preload-script-registration.md
    │       ├── preload-script.md
    │       ├── printer-info.md
    │       ├── process-memory-info.md
    │       ├── process-metric.md
    │       ├── product-discount.md
    │       ├── product-subscription-period.md
    │       ├── product.md
    │       ├── protocol-request.md
    │       ├── protocol-response-upload-data.md
    │       ├── protocol-response.md
    │       ├── proxy-config.md
    │       ├── rectangle.md
    │       ├── referrer.md
    │       ├── render-process-gone-details.md
    │       ├── resolved-endpoint.md
    │       ├── resolved-host.md
    │       ├── scrubber-item.md
    │       ├── segmented-control-segment.md
    │       ├── serial-port.md
    │       ├── service-worker-info.md
    │       ├── shared-dictionary-info.md
    │       ├── shared-dictionary-usage-info.md
    │       ├── shared-worker-info.md
    │       ├── sharing-item.md
    │       ├── shortcut-details.md
    │       ├── size.md
    │       ├── task.md
    │       ├── thumbar-button.md
    │       ├── trace-categories-and-options.md
    │       ├── trace-config.md
    │       ├── transaction.md
    │       ├── upload-data.md
    │       ├── upload-file.md
    │       ├── upload-raw-data.md
    │       ├── usb-device.md
    │       ├── user-default-types.md
    │       ├── web-preferences.md
    │       ├── web-request-filter.md
    │       ├── web-source.md
    │       ├── window-open-handler-response.md
    │       └── window-session-end-event.md
    ├── development/
    │   ├── README.md
    │   ├── api-history-migration-guide.md
    │   ├── build-instructions-gn.md
    │   ├── build-instructions-linux.md
    │   ├── build-instructions-macos.md
    │   ├── build-instructions-windows.md
    │   ├── chromium-development.md
    │   ├── clang-tidy.md
    │   ├── coding-style.md
    │   ├── creating-api.md
    │   ├── debugging-on-macos.md
    │   ├── debugging-on-windows.md
    │   ├── debugging-with-symbol-server.md
    │   ├── debugging-with-xcode.md
    │   ├── debugging.md
    │   ├── issues.md
    │   ├── patches.md
    │   ├── pull-requests.md
    │   ├── reclient.md
    │   ├── source-code-directory-structure.md
    │   ├── style-guide.md
    │   ├── testing.md
    │   └── v8-development.md
    ├── fiddles/
    │   ├── features/
    │   │   ├── dark-mode/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   ├── renderer.js
    │   │   │   └── styles.css
    │   │   ├── drag-and-drop/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   └── renderer.js
    │   │   ├── keyboard-shortcuts/
    │   │   │   ├── global/
    │   │   │   │   ├── index.html
    │   │   │   │   └── main.js
    │   │   │   ├── interception-from-main/
    │   │   │   │   ├── index.html
    │   │   │   │   └── main.js
    │   │   │   ├── local/
    │   │   │   │   ├── index.html
    │   │   │   │   └── main.js
    │   │   │   └── web-apis/
    │   │   │       ├── index.html
    │   │   │       ├── main.js
    │   │   │       └── renderer.js
    │   │   ├── macos-dock-menu/
    │   │   │   ├── index.html
    │   │   │   └── main.js
    │   │   ├── navigation-history/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   ├── renderer.js
    │   │   │   └── style.css
    │   │   ├── notifications/
    │   │   │   ├── main/
    │   │   │   │   ├── index.html
    │   │   │   │   └── main.js
    │   │   │   └── renderer/
    │   │   │       ├── index.html
    │   │   │       ├── main.js
    │   │   │       └── renderer.js
    │   │   ├── offscreen-rendering/
    │   │   │   └── main.js
    │   │   ├── online-detection/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   └── renderer.js
    │   │   ├── progress-bar/
    │   │   │   ├── index.html
    │   │   │   └── main.js
    │   │   ├── recent-documents/
    │   │   │   ├── index.html
    │   │   │   └── main.js
    │   │   ├── represented-file/
    │   │   │   ├── index.html
    │   │   │   └── main.js
    │   │   ├── web-bluetooth/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   └── renderer.js
    │   │   ├── web-hid/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   └── renderer.js
    │   │   ├── web-serial/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   └── renderer.js
    │   │   ├── web-usb/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   └── renderer.js
    │   │   └── window-customization/
    │   │       ├── custom-title-bar/
    │   │       │   ├── custom-drag-region/
    │   │       │   │   ├── index.html
    │   │       │   │   ├── main.js
    │   │       │   │   └── styles.css
    │   │       │   ├── custom-title-bar/
    │   │       │   │   ├── index.html
    │   │       │   │   ├── main.js
    │   │       │   │   └── styles.css
    │   │       │   ├── native-window-controls/
    │   │       │   │   └── main.js
    │   │       │   ├── remove-title-bar/
    │   │       │   │   └── main.js
    │   │       │   └── starter-code/
    │   │       │       └── main.js
    │   │       └── custom-window-styles/
    │   │           ├── frameless-windows/
    │   │           │   └── main.js
    │   │           └── transparent-windows/
    │   │               ├── index.html
    │   │               ├── main.js
    │   │               └── styles.css
    │   ├── ipc/
    │   │   ├── pattern-1/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   └── renderer.js
    │   │   ├── pattern-2/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   └── renderer.js
    │   │   ├── pattern-3/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   └── renderer.js
    │   │   └── webview-new-window/
    │   │       ├── child.html
    │   │       ├── index.html
    │   │       ├── main.js
    │   │       ├── preload.js
    │   │       └── renderer.js
    │   ├── media/
    │   │   └── screenshot/
    │   │       └── take-screenshot/
    │   │           ├── index.html
    │   │           ├── main.js
    │   │           ├── preload.js
    │   │           └── renderer.js
    │   ├── menus/
    │   │   ├── customize-menus/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   └── renderer.js
    │   │   └── shortcuts/
    │   │       ├── index.html
    │   │       └── main.js
    │   ├── native-ui/
    │   │   ├── dialogs/
    │   │   │   ├── error-dialog/
    │   │   │   │   ├── index.html
    │   │   │   │   ├── main.js
    │   │   │   │   ├── preload.js
    │   │   │   │   └── renderer.js
    │   │   │   ├── information-dialog/
    │   │   │   │   ├── index.html
    │   │   │   │   ├── main.js
    │   │   │   │   ├── preload.js
    │   │   │   │   └── renderer.js
    │   │   │   ├── open-file-or-directory/
    │   │   │   │   ├── index.html
    │   │   │   │   ├── main.js
    │   │   │   │   ├── preload.js
    │   │   │   │   └── renderer.js
    │   │   │   └── save-dialog/
    │   │   │       ├── index.html
    │   │   │       ├── main.js
    │   │   │       ├── preload.js
    │   │   │       └── renderer.js
    │   │   ├── drag-and-drop/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   └── renderer.js
    │   │   ├── external-links-file-manager/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   ├── preload.js
    │   │   │   └── renderer.js
    │   │   ├── notifications/
    │   │   │   ├── index.html
    │   │   │   ├── main.js
    │   │   │   └── renderer.js
    │   │   └── tray/
    │   │       ├── index.html
    │   │       └── main.js
    │   ├── quick-start/
    │   │   ├── index.html
    │   │   ├── main.js
    │   │   └── preload.js
    │   ├── screen/
    │   │   └── fit-screen/
    │   │       └── main.js
    │   ├── system/
    │   │   ├── clipboard/
    │   │   │   ├── copy/
    │   │   │   │   ├── index.html
    │   │   │   │   ├── main.js
    │   │   │   │   ├── preload.js
    │   │   │   │   └── renderer.js
    │   │   │   └── paste/
    │   │   │       ├── index.html
    │   │   │       ├── main.js
    │   │   │       ├── preload.js
    │   │   │       └── renderer.js
    │   │   ├── protocol-handler/
    │   │   │   └── launch-app-from-URL-in-another-app/
    │   │   │       ├── index.html
    │   │   │       ├── main.js
    │   │   │       ├── preload.js
    │   │   │       └── renderer.js
    │   │   ├── system-app-user-information/
    │   │   │   └── app-information/
    │   │   │       ├── index.html
    │   │   │       ├── main.js
    │   │   │       ├── preload.js
    │   │   │       └── renderer.js
    │   │   └── system-information/
    │   │       └── get-version-information/
    │   │           ├── index.html
    │   │           ├── main.js
    │   │           ├── preload.js
    │   │           └── renderer.js
    │   ├── tutorial-first-app/
    │   │   ├── index.html
    │   │   └── main.js
    │   ├── tutorial-preload/
    │   │   ├── index.html
    │   │   ├── main.js
    │   │   ├── preload.js
    │   │   └── renderer.js
    │   └── windows/
    │       ├── crashes-and-hangs/
    │       │   └── .keep
    │       └── manage-windows/
    │           ├── frameless-window/
    │           │   ├── index.html
    │           │   ├── main.js
    │           │   ├── preload.js
    │           │   └── renderer.js
    │           ├── manage-window-state/
    │           │   ├── index.html
    │           │   ├── main.js
    │           │   ├── preload.js
    │           │   └── renderer.js
    │           ├── new-window/
    │           │   ├── index.html
    │           │   ├── main.js
    │           │   ├── preload.js
    │           │   └── renderer.js
    │           └── window-events/
    │               ├── index.html
    │               ├── main.js
    │               ├── preload.js
    │               └── renderer.js
    ├── images/
    └── tutorial/
        ├── accessibility.md
        ├── application-debugging.md
        ├── application-distribution.md
        ├── asar-archives.md
        ├── asar-integrity.md
        ├── automated-testing.md
        ├── boilerplates-and-clis.md
        ├── code-signing.md
        ├── context-isolation.md
        ├── custom-title-bar.md
        ├── custom-window-interactions.md
        ├── custom-window-styles.md
        ├── dark-mode.md
        ├── debugging-main-process.md
        ├── debugging-vscode.md
        ├── devices.md
        ├── devtools-extension.md
        ├── distribution-overview.md
        ├── electron-timelines.md
        ├── electron-versioning.md
        ├── esm.md
        ├── examples.md
        ├── forge-overview.md
        ├── fuses.md
        ├── in-app-purchases.md
        ├── installation.md
        ├── introduction.md
        ├── ipc.md
        ├── keyboard-shortcuts.md
        ├── launch-app-from-url-in-another-app.md
        ├── linux-desktop-actions.md
        ├── mac-app-store-submission-guide.md
        ├── macos-dock.md
        ├── message-ports.md
        ├── multithreading.md
        ├── native-code-and-electron-cpp-win32.md
        ├── native-code-and-electron-objc-macos.md
        ├── native-code-and-electron.md
        ├── native-file-drag-drop.md
        ├── navigation-history.md
        ├── notifications.md
        ├── offscreen-rendering.md
        ├── online-offline-events.md
        ├── performance.md
        ├── process-model.md
        ├── progress-bar.md
        ├── recent-documents.md
        ├── repl.md
        ├── represented-file.md
        ├── sandbox.md
        ├── security.md
        ├── snapcraft.md
        ├── spellchecker.md
        ├── support.md
        ├── testing-on-headless-ci.md
        ├── tray.md
        ├── tutorial-1-prerequisites.md
        ├── tutorial-2-first-app.md
        ├── tutorial-3-preload.md
        ├── tutorial-4-adding-features.md
        ├── tutorial-5-packaging.md
        ├── tutorial-6-publishing-updating.md
        ├── updates.md
        ├── using-native-node-modules.md
        ├── using-pepper-flash-plugin.md
        ├── web-embeds.md
        ├── window-customization.md
        ├── windows-arm.md
        ├── windows-store-guide.md
        └── windows-taskbar.md


Files Content:

(Files content cropped to 300k characters, download full ingest to see more)
================================================
FILE: docs/README.md
================================================
# Official Guides

Please make sure that you use the documents that match your Electron version.
The version number should be a part of the page URL. If it's not, you are
probably using the documentation of a development branch which may contain API
changes that are not compatible with your Electron version. To view older
versions of the documentation, you can
[browse by tag](https://github.com/electron/electron/tree/v1.4.0)
on GitHub by opening the "Switch branches/tags" dropdown and selecting the tag
that matches your version.

## FAQ

There are questions that are asked quite often. Check this out before creating
an issue:

* [Electron FAQ](faq.md)

## Guides and Tutorials

### Getting started

* [Introduction](tutorial/introduction.md)
* [Process Model](tutorial/process-model.md)

### Learning the basics

* Adding Features to Your App
  * [Notifications](tutorial/notifications.md)
  * [Recent Documents](tutorial/recent-documents.md)
  * [Application Progress](tutorial/progress-bar.md)
  * [Custom Dock Menu](tutorial/macos-dock.md)
  * [Custom Windows Taskbar](tutorial/windows-taskbar.md)
  * [Custom Linux Desktop Actions](tutorial/linux-desktop-actions.md)
  * [Keyboard Shortcuts](tutorial/keyboard-shortcuts.md)
  * [Offline/Online Detection](tutorial/online-offline-events.md)
  * [Represented File for macOS BrowserWindows](tutorial/represented-file.md)
  * [Native File Drag & Drop](tutorial/native-file-drag-drop.md)
  * [Navigation History](tutorial/navigation-history.md)
  * [Offscreen Rendering](tutorial/offscreen-rendering.md)
  * [Dark Mode](tutorial/dark-mode.md)
  * [Web embeds in Electron](tutorial/web-embeds.md)
* [Boilerplates and CLIs](tutorial/boilerplates-and-clis.md)
  * [Boilerplate vs CLI](tutorial/boilerplates-and-clis.md#boilerplate-vs-cli)
  * [Electron Forge](tutorial/boilerplates-and-clis.md#electron-forge)
  * [electron-builder](tutorial/boilerplates-and-clis.md#electron-builder)
  * [electron-react-boilerplate](tutorial/boilerplates-and-clis.md#electron-react-boilerplate)
  * [Other Tools and Boilerplates](tutorial/boilerplates-and-clis.md#other-tools-and-boilerplates)

### Advanced steps

* Application Architecture
  * [Using Native Node.js Modules](tutorial/using-native-node-modules.md)
  * [Performance Strategies](tutorial/performance.md)
  * [Security Strategies](tutorial/security.md)
  * [Process Sandboxing](tutorial/sandbox.md)
* [Accessibility](tutorial/accessibility.md)
  * [Manually Enabling Accessibility Features](tutorial/accessibility.md#manually-enabling-accessibility-features)
* [Testing and Debugging](tutorial/application-debugging.md)
  * [Debugging the Main Process](tutorial/debugging-main-process.md)
  * [Debugging with Visual Studio Code](tutorial/debugging-vscode.md)
  * [Testing on Headless CI Systems (Travis, Jenkins)](tutorial/testing-on-headless-ci.md)
  * [DevTools Extension](tutorial/devtools-extension.md)
  * [Automated Testing](tutorial/automated-testing.md)
  * [REPL](tutorial/repl.md)
* [Distribution](tutorial/application-distribution.md)
  * [Code Signing](tutorial/code-signing.md)
  * [Mac App Store](tutorial/mac-app-store-submission-guide.md)
  * [Windows Store](tutorial/windows-store-guide.md)
  * [Snapcraft](tutorial/snapcraft.md)
  * [ASAR Archives](tutorial/asar-archives.md)
* [Updates](tutorial/updates.md)
* [Getting Support](tutorial/support.md)

## Detailed Tutorials

These individual tutorials expand on topics discussed in the guide above.

* [Installing Electron](tutorial/installation.md)
  * [Proxies](tutorial/installation.md#proxies)
  * [Custom Mirrors and Caches](tutorial/installation.md#custom-mirrors-and-caches)
  * [Troubleshooting](tutorial/installation.md#troubleshooting)
* Electron Releases & Developer Feedback
  * [Versioning Policy](tutorial/electron-versioning.md)
  * [Release Timelines](tutorial/electron-timelines.md)

---

* [Glossary of Terms](glossary.md)

## API References

* [Process Object](api/process.md)
* [Supported Command Line Switches](api/command-line-switches.md)
* [Environment Variables](api/environment-variables.md)
* [Chrome Extensions Support](api/extensions.md)
* [Breaking API Changes](breaking-changes.md)

### Custom Web Features:

* [`-electron-corner-smoothing` CSS Rule](api/corner-smoothing-css.md)
* [`<webview>` Tag](api/webview-tag.md)
* [`window.open` Function](api/window-open.md)

### Modules for the Main Process:

* [app](api/app.md)
* [autoUpdater](api/auto-updater.md)
* [BaseWindow](api/base-window.md)
* [BrowserWindow](api/browser-window.md)
* [contentTracing](api/content-tracing.md)
* [desktopCapturer](api/desktop-capturer.md)
* [dialog](api/dialog.md)
* [globalShortcut](api/global-shortcut.md)
* [inAppPurchase](api/in-app-purchase.md)
* [ipcMain](api/ipc-main.md)
* [Menu](api/menu.md)
* [MenuItem](api/menu-item.md)
* [MessageChannelMain](api/message-channel-main.md)
* [MessagePortMain](api/message-port-main.md)
* [nativeTheme](api/native-theme.md)
* [net](api/net.md)
* [netLog](api/net-log.md)
* [Notification](api/notification.md)
* [powerMonitor](api/power-monitor.md)
* [powerSaveBlocker](api/power-save-blocker.md)
* [protocol](api/protocol.md)
* [pushNotifications](api/push-notifications.md)
* [safeStorage](api/safe-storage.md)
* [screen](api/screen.md)
* [ServiceWorkerMain](api/service-worker-main.md)
* [session](api/session.md)
* [ShareMenu](api/share-menu.md)
* [systemPreferences](api/system-preferences.md)
* [TouchBar](api/touch-bar.md)
* [Tray](api/tray.md)
* [utilityProcess](api/utility-process.md)
* [View](api/view.md)
* [webContents](api/web-contents.md)
* [webFrameMain](api/web-frame-main.md)
* [WebContentsView](api/web-contents-view.md)

### Modules for the Renderer Process (Web Page):

* [contextBridge](api/context-bridge.md)
* [ipcRenderer](api/ipc-renderer.md)
* [webFrame](api/web-frame.md)

### Modules for Both Processes:

* [clipboard](api/clipboard.md) (non-sandboxed renderers only)
* [crashReporter](api/crash-reporter.md)
* [nativeImage](api/native-image.md)
* [shell](api/shell.md) (non-sandboxed renderers only)

## Development

See [development/README.md](development/README.md)



================================================
FILE: docs/api-history.schema.json
================================================
{
  "title": "JSON schema for API history blocks in Electron documentation",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$comment": "If you change this schema, remember to edit the TypeScript interfaces in the linting script.",
  "definitions": {
    "baseChangeSchema": {
      "type": "object",
      "properties": {
        "pr-url": {
          "description": "URL to the 'main' GitHub Pull Request for the change (i.e. not a backport PR)",
          "type": "string", "pattern": "^https://github.com/electron/electron/pull/\\d+$",
          "examples": [ "https://github.com/electron/electron/pull/26789" ]
        },
        "breaking-changes-header": {
          "description": "Heading ID for the change in `electron/docs/breaking-changes.md`",
          "type": "string", "minLength": 3,
          "examples": [ "deprecated-browserwindowsettrafficlightpositionposition" ]
        },
        "description": {
          "description": "Short description of the change",
          "type": "string", "minLength": 3, "maxLength": 120,
          "examples": [ "Made `trafficLightPosition` option work for `customButtonOnHover`." ]
        }
      },
      "required": [ "pr-url" ],
      "additionalProperties": false
    },
    "addedChangeSchema": {
      "allOf": [ { "$ref": "#/definitions/baseChangeSchema" } ]
    },
    "deprecatedChangeSchema": {
      "$comment": "TODO: Make 'breaking-changes-header' required in the future.",
      "allOf": [ { "$ref": "#/definitions/baseChangeSchema" } ]
    },
    "changesChangeSchema": {
      "$comment": "Unlike RFC, added `'type': 'object'` to appease AJV strict mode",
      "allOf": [ { "$ref": "#/definitions/baseChangeSchema" }, { "type": "object", "required": [ "description" ] } ]
    }
  },
  "type": "object",
  "properties": {
    "added": { "type": "array", "minItems": 1, "maxItems": 1, "items": { "$ref": "#/definitions/addedChangeSchema" } },
    "deprecated": { "type": "array", "minItems": 1, "maxItems": 1, "items": { "$ref": "#/definitions/deprecatedChangeSchema" } },
    "changes": { "type": "array", "minItems": 1, "items": { "$ref": "#/definitions/changesChangeSchema" } }
  },
  "additionalProperties": false
}



================================================
FILE: docs/breaking-changes.md
================================================
# Breaking Changes

Breaking changes will be documented here, and deprecation warnings added to JS code where possible, at least [one major version](tutorial/electron-versioning.md#semver) before the change is made.

### Types of Breaking Changes

This document uses the following convention to categorize breaking changes:

* **API Changed:** An API was changed in such a way that code that has not been updated is guaranteed to throw an exception.
* **Behavior Changed:** The behavior of Electron has changed, but not in such a way that an exception will necessarily be thrown.
* **Default Changed:** Code depending on the old default may break, not necessarily throwing an exception. The old behavior can be restored by explicitly specifying the value.
* **Deprecated:** An API was marked as deprecated. The API will continue to function, but will emit a deprecation warning, and will be removed in a future release.
* **Removed:** An API or feature was removed, and is no longer supported by Electron.

## Planned Breaking API Changes (37.0)

### Utility Process unhandled rejection behavior change

Utility Processes will now warn with an error message when an unhandled
rejection occurs instead of crashing the process.

To restore the previous behavior, you can use:

```js
process.on('unhandledRejection', () => {
  process.exit(1)
})
```

### Behavior Changed: WebUSB and WebSerial Blocklist Support

[WebUSB](https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API) and [Web Serial](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API) now support the [WebUSB Blocklist](https://wicg.github.io/webusb/#blocklist) and [Web Serial Blocklist](https://wicg.github.io/serial/#blocklist) used by Chromium and outlined in their respective specifications.

To disable these, users can pass `disable-usb-blocklist` and `disable-serial-blocklist` as command line flags.

### Removed: `null` value for `session` property in `ProtocolResponse`

This deprecated feature has been removed.

Previously, setting the `ProtocolResponse.session` property to `null`
would create a random independent session. This is no longer supported.

Using single-purpose sessions here is discouraged due to overhead costs;
however, old code that needs to preserve this behavior can emulate it by
creating a random session with `session.fromPartition(some_random_string)`
and then using it in `ProtocolResponse.session`.

### Behavior Changed: `BrowserWindow.IsVisibleOnAllWorkspaces()` on Linux

`BrowserWindow.IsVisibleOnAllWorkspaces()` will now return false on Linux if the
window is not currently visible.

## Planned Breaking API Changes (36.0)

### Behavior Changes: `app.commandLine`

`app.commandLine` will convert upper-cases switches and arguments to lowercase.

`app.commandLine` was only meant to handle chromium switches (which aren't case-sensitive) and switches passed via `app.commandLine` will not be passed down to any of the child processes.

If you were using `app.commandLine` to control the behavior of the  main process, you should do this via `process.argv`.

### Deprecated: `NativeImage.getBitmap()`

`NativeImage.toBitmap()` returns a newly-allocated copy of the bitmap. `NativeImage.getBitmap()` was originally an alternative function that returned the original instead of a copy. This changed when sandboxing was introduced, so both return a copy and are functionally equivalent.

Client code should call `NativeImage.toBitmap()` instead:

```js
// Deprecated
bitmap = image.getBitmap()
// Use this instead
bitmap = image.toBitmap()
```

### Removed: `isDefault` and `status` properties on `PrinterInfo`

These properties have been removed from the PrinterInfo Object
because they have been removed from upstream Chromium.

### Removed: `quota` type `syncable` in `Session.clearStorageData(options)`

When calling `Session.clearStorageData(options)`, the `options.quota` type
`syncable` is no longer supported because it has been
[removed](https://chromium-review.googlesource.com/c/chromium/src/+/6309405)
from upstream Chromium.

### Deprecated: `null` value for `session` property in `ProtocolResponse`

Previously, setting the ProtocolResponse.session property to `null`
Would create a random independent session. This is no longer supported.

Using single-purpose sessions here is discouraged due to overhead costs;
however, old code that needs to preserve this behavior can emulate it by
creating a random session with `session.fromPartition(some_random_string)`
and then using it in `ProtocolResponse.session`.

### Deprecated: `quota` property in `Session.clearStorageData(options)`

When calling `Session.clearStorageData(options)`, the `options.quota`
property is deprecated. Since the `syncable` type was removed, there
is only type left -- `'temporary'` -- so specifying it is unnecessary.

### Deprecated: Extension methods and events on `session`

`session.loadExtension`, `session.removeExtension`, `session.getExtension`,
`session.getAllExtensions`, 'extension-loaded' event, 'extension-unloaded'
event, and 'extension-ready' events have all moved to the new
`session.extensions` class.

### Removed: `systemPreferences.isAeroGlassEnabled()`

The `systemPreferences.isAeroGlassEnabled()` function has been removed without replacement.
It has been always returning `true` since Electron 23, which only supports Windows 10+, where DWM composition can no longer be disabled.

https://learn.microsoft.com/en-us/windows/win32/dwm/composition-ovw#disabling-dwm-composition-windows7-and-earlier

### Changed: GTK 4 is default when running GNOME

After an [upstream change](https://chromium-review.googlesource.com/c/chromium/src/+/6310469), GTK 4 is now the default when running GNOME.

In rare cases, this may cause some applications or configurations to [error](https://github.com/electron/electron/issues/46538) with the following message:

```stderr
Gtk-ERROR **: 11:30:38.382: GTK 2/3 symbols detected. Using GTK 2/3 and GTK 4 in the same process is not supported
```

Affected users can work around this by specifying the `gtk-version` command-line flag:

```shell
$ electron --gtk-version=3   # or --gtk-version=2
```

The same can be done with the [`app.commandLine.appendSwitch`](https://www.electronjs.org/docs/latest/api/command-line#commandlineappendswitchswitch-value) function.

## Planned Breaking API Changes (35.0)

### Behavior Changed: Dialog API's `defaultPath` option on Linux

On Linux, the required portal version for file dialogs has been reverted
to 3 from 4. Using the `defaultPath` option of the Dialog API is not
supported when using portal file chooser dialogs unless the portal
backend is version 4 or higher. The `--xdg-portal-required-version`
[command-line switch](/api/command-line-switches.md#--xdg-portal-required-versionversion)
can be used to force a required version for your application.
See [#44426](https://github.com/electron/electron/pull/44426) for more details.

### Deprecated: `getFromVersionID` on `session.serviceWorkers`

The `session.serviceWorkers.fromVersionID(versionId)` API has been deprecated
in favor of `session.serviceWorkers.getInfoFromVersionID(versionId)`. This was
changed to make it more clear which object is returned with the introduction
of the `session.serviceWorkers.getWorkerFromVersionID(versionId)` API.

```js
// Deprecated
session.serviceWorkers.fromVersionID(versionId)

// Replace with
session.serviceWorkers.getInfoFromVersionID(versionId)
```

### Deprecated: `setPreloads`, `getPreloads` on `Session`

`registerPreloadScript`, `unregisterPreloadScript`, and `getPreloadScripts` are introduced as a
replacement for the deprecated methods. These new APIs allow third-party libraries to register
preload scripts without replacing existing scripts. Also, the new `type` option allows for
additional preload targets beyond `frame`.

```js
// Deprecated
session.setPreloads([path.join(__dirname, 'preload.js')])

// Replace with:
session.registerPreloadScript({
  type: 'frame',
  id: 'app-preload',
  filePath: path.join(__dirname, 'preload.js')
})
```

### Deprecated: `level`, `message`, `line`, and `sourceId` arguments in `console-message` event on `WebContents`

The `console-message` event on `WebContents` has been updated to provide details on the `Event`
argument.

```js
// Deprecated
webContents.on('console-message', (event, level, message, line, sourceId) => {})

// Replace with:
webContents.on('console-message', ({ level, message, lineNumber, sourceId, frame }) => {})
```

Additionally, `level` is now a string with possible values of `info`, `warning`, `error`, and `debug`.

### Behavior Changed: `urls` property of `WebRequestFilter`.

Previously, an empty urls array was interpreted as including all URLs. To explicitly include all URLs, developers should now use the `<all_urls>` pattern, which is a [designated URL pattern](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) that matches every possible URL. This change clarifies the intent and ensures more predictable behavior.

```js
// Deprecated
const deprecatedFilter = {
  urls: []
}

// Replace with
const newFilter = {
  urls: ['<all_urls>']
}
```

### Deprecated: `systemPreferences.isAeroGlassEnabled()`

The `systemPreferences.isAeroGlassEnabled()` function has been deprecated without replacement.
It has been always returning `true` since Electron 23, which only supports Windows 10+, where DWM composition can no longer be disabled.

https://learn.microsoft.com/en-us/windows/win32/dwm/composition-ovw#disabling-dwm-composition-windows7-and-earlier

## Planned Breaking API Changes (34.0)

### Behavior Changed: menu bar will be hidden during fullscreen on Windows

This brings the behavior to parity with Linux. Prior behavior: Menu bar is still visible during fullscreen on Windows. New behavior: Menu bar is hidden during fullscreen on Windows.

**Correction**: This was previously listed as a breaking change in Electron 33, but was first released in Electron 34.

## Planned Breaking API Changes (33.0)

### Deprecated: `document.execCommand("paste")`

The synchronous clipboard read API [document.execCommand("paste")](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) has been
deprecated in favor of [async clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). This is to align with the browser defaults.

The `enableDeprecatedPaste` option on `WebPreferences` that triggers the permission
checks for this API and the associated permission type `deprecated-sync-clipboard-read`
are also deprecated.

### Behavior Changed: frame properties may retrieve detached WebFrameMain instances or none at all

APIs which provide access to a `WebFrameMain` instance may return an instance
with `frame.detached` set to `true`, or possibly return `null`.

When a frame performs a cross-origin navigation, it enters into a detached state
in which it's no longer attached to the page. In this state, it may be running
[unload](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event)
handlers prior to being deleted. In the event of an IPC sent during this state,
`frame.detached` will be set to `true` with the frame being destroyed shortly
thereafter.

When receiving an event, it's important to access WebFrameMain properties
immediately upon being received. Otherwise, it's not guaranteed to point to the
same webpage as when received. To avoid misaligned expectations, Electron will
return `null` in the case of late access where the webpage has changed.

```js
ipcMain.on('unload-event', (event) => {
  event.senderFrame // ✅ accessed immediately
})

ipcMain.on('unload-event', async (event) => {
  await crossOriginNavigationPromise
  event.senderFrame // ❌ returns `null` due to late access
})
```

### Behavior Changed: custom protocol URL handling on Windows

Due to changes made in Chromium to support [Non-Special Scheme URLs](http://bit.ly/url-non-special), custom protocol URLs that use Windows file paths will no longer work correctly with the deprecated `protocol.registerFileProtocol` and the `baseURLForDataURL` property on `BrowserWindow.loadURL`, `WebContents.loadURL`, and `<webview>.loadURL`.  `protocol.handle` will also not work with these types of URLs but this is not a change since it has always worked that way.

```js
// No longer works
protocol.registerFileProtocol('other', () => {
  callback({ filePath: '/path/to/my/file' })
})

const mainWindow = new BrowserWindow()
mainWindow.loadURL('data:text/html,<script src="loaded-from-dataurl.js"></script>', { baseURLForDataURL: 'other://C:\\myapp' })
mainWindow.loadURL('other://C:\\myapp\\index.html')

// Replace with
const path = require('node:path')
const nodeUrl = require('node:url')
protocol.handle(other, (req) => {
  const srcPath = 'C:\\myapp\\'
  const reqURL = new URL(req.url)
  return net.fetch(nodeUrl.pathToFileURL(path.join(srcPath, reqURL.pathname)).toString())
})

mainWindow.loadURL('data:text/html,<script src="loaded-from-dataurl.js"></script>', { baseURLForDataURL: 'other://' })
mainWindow.loadURL('other://index.html')
```

### Behavior Changed: `webContents` property on `login` on `app`

The `webContents` property in the `login` event from `app` will be `null`
when the event is triggered for requests from the [utility process](api/utility-process.md)
created with `respondToAuthRequestsFromMainProcess` option.

### Deprecated: `textured` option in `BrowserWindowConstructorOption.type`

The `textured` option of `type` in `BrowserWindowConstructorOptions` has been deprecated with no replacement. This option relied on the [`NSWindowStyleMaskTexturedBackground`](https://developer.apple.com/documentation/appkit/nswindowstylemask/nswindowstylemasktexturedbackground) style mask on macOS, which has been deprecated with no alternative.

### Removed: macOS 10.15 support

macOS 10.15 (Catalina) is no longer supported by [Chromium](https://chromium-review.googlesource.com/c/chromium/src/+/5734361).

Older versions of Electron will continue to run on Catalina, but macOS 11 (Big Sur)
or later will be required to run Electron v33.0.0 and higher.

### Behavior Changed: Native modules now require C++20

Due to changes made upstream, both
[V8](https://chromium-review.googlesource.com/c/v8/v8/+/5587859) and
[Node.js](https://github.com/nodejs/node/pull/45427) now require C++20 as a
minimum version. Developers using native node modules should build their
modules with `--std=c++20` rather than `--std=c++17`. Images using gcc9 or
lower may need to update to gcc10 in order to compile. See
[#43555](https://github.com/electron/electron/pull/43555) for more details.

### Deprecated: `systemPreferences.accessibilityDisplayShouldReduceTransparency`

The `systemPreferences.accessibilityDisplayShouldReduceTransparency` property is now deprecated in favor of the new `nativeTheme.prefersReducedTransparency`, which provides identical information and works cross-platform.

```js
// Deprecated
const shouldReduceTransparency = systemPreferences.accessibilityDisplayShouldReduceTransparency

// Replace with:
const prefersReducedTransparency = nativeTheme.prefersReducedTransparency
```

## Planned Breaking API Changes (32.0)

### Removed: `File.path`

The nonstandard `path` property of the Web `File` object was added in an early version of Electron as a convenience method for working with native files when doing everything in the renderer was more common. However, it represents a deviation from the standard and poses a minor security risk as well, so beginning in Electron 32.0 it has been removed in favor of the [`webUtils.getPathForFile`](api/web-utils.md#webutilsgetpathforfilefile) method.

```js
// Before (renderer)

const file = document.querySelector('input[type=file]').files[0]
alert(`Uploaded file path was: ${file.path}`)
```

```js
// After (renderer)

const file = document.querySelector('input[type=file]').files[0]
electron.showFilePath(file)

// (preload)
const { contextBridge, webUtils } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  showFilePath (file) {
    // It's best not to expose the full file path to the web content if
    // possible.
    const path = webUtils.getPathForFile(file)
    alert(`Uploaded file path was: ${path}`)
  }
})
```

### Deprecated: `clearHistory`, `canGoBack`, `goBack`, `canGoForward`, `goForward`, `goToIndex`, `canGoToOffset`, `goToOffset` on `WebContents`

The navigation-related APIs are now deprecated.

These APIs have been moved to the `navigationHistory` property of `WebContents` to provide a more structured and intuitive interface for managing navigation history.

```js
// Deprecated
win.webContents.clearHistory()
win.webContents.canGoBack()
win.webContents.goBack()
win.webContents.canGoForward()
win.webContents.goForward()
win.webContents.goToIndex(index)
win.webContents.canGoToOffset()
win.webContents.goToOffset(index)

// Replace with
win.webContents.navigationHistory.clear()
win.webContents.navigationHistory.canGoBack()
win.webContents.navigationHistory.goBack()
win.webContents.navigationHistory.canGoForward()
win.webContents.navigationHistory.goForward()
win.webContents.navigationHistory.canGoToOffset()
win.webContents.navigationHistory.goToOffset(index)
```

### Behavior changed: Directory `databases` in `userData` will be deleted

If you have a directory called `databases` in the directory returned by
`app.getPath('userData')`, it will be deleted when Electron 32 is first run.
The `databases` directory was used by WebSQL, which was removed in Electron 31.
Chromium now performs a cleanup that deletes this directory. See
[issue #45396](https://github.com/electron/electron/issues/45396).

## Planned Breaking API Changes (31.0)

### Removed: `WebSQL` support

Chromium has removed support for WebSQL upstream, transitioning it to Android only. See
[Chromium's intent to remove discussion](https://groups.google.com/a/chromium.org/g/blink-dev/c/fWYb6evVA-w/m/wGI863zaAAAJ)
for more information.

### Behavior Changed: `nativeImage.toDataURL` will preserve PNG colorspace

PNG decoder implementation has been changed to preserve colorspace data, the
encoded data returned from this function now matches it.

See [crbug.com/332584706](https://issues.chromium.org/issues/332584706) for more information.

### Behavior Changed: `window.flashFrame(bool)` will flash dock icon continuously on macOS

This brings the behavior to parity with Windows and Linux. Prior behavior: The first `flashFrame(true)` bounces the dock icon only once (using the [NSInformationalRequest](https://developer.apple.com/documentation/appkit/nsrequestuserattentiontype/nsinformationalrequest) level) and `flashFrame(false)` does nothing. New behavior: Flash continuously until `flashFrame(false)` is called. This uses the [NSCriticalRequest](https://developer.apple.com/documentation/appkit/nsrequestuserattentiontype/nscriticalrequest) level instead. To explicitly use `NSInformationalRequest` to cause a single dock icon bounce, it is still possible to use [`dock.bounce('informational')`](https://www.electronjs.org/docs/latest/api/dock#dockbouncetype-macos).

## Planned Breaking API Changes (30.0)

### Behavior Changed: cross-origin iframes now use Permission Policy to access features

Cross-origin iframes must now specify features available to a given `iframe` via the `allow`
attribute in order to access them.

See [documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow) for
more information.

### Removed: The `--disable-color-correct-rendering` switch

This switch was never formally documented but it's removal is being noted here regardless. Chromium itself now has better support for color spaces so this flag should not be needed.

### Behavior Changed: `BrowserView.setAutoResize` behavior on macOS

In Electron 30, BrowserView is now a wrapper around the new [WebContentsView](api/web-contents-view.md) API.

Previously, the `setAutoResize` function of the `BrowserView` API was backed by [autoresizing](https://developer.apple.com/documentation/appkit/nsview/1483281-autoresizingmask?language=objc) on macOS, and by a custom algorithm on Windows and Linux.
For simple use cases such as making a BrowserView fill the entire window, the behavior of these two approaches was identical.
However, in more advanced cases, BrowserViews would be autoresized differently on macOS than they would be on other platforms, as the custom resizing algorithm for Windows and Linux did not perfectly match the behavior of macOS's autoresizing API.
The autoresizing behavior is now standardized across all platforms.

If your app uses `BrowserView.setAutoResize` to do anything more complex than making a BrowserView fill the entire window, it's likely you already had custom logic in place to handle this difference in behavior on macOS.
If so, that logic will no longer be needed in Electron 30 as autoresizing behavior is consistent.

### Deprecated: `BrowserView`

The [`BrowserView`](./api/browser-view.md) class has been deprecated and
replaced by the new [`WebContentsView`](./api/web-contents-view.md) class.

`BrowserView` related methods in [`BrowserWindow`](./api/browser-window.md) have
also been deprecated:

```js
BrowserWindow.fromBrowserView(browserView)
win.setBrowserView(browserView)
win.getBrowserView()
win.addBrowserView(browserView)
win.removeBrowserView(browserView)
win.setTopBrowserView(browserView)
win.getBrowserViews()
```

### Removed: `params.inputFormType` property on `context-menu` on `WebContents`

The `inputFormType` property of the params object in the `context-menu`
event from `WebContents` has been removed. Use the new `formControlType`
property instead.

### Removed: `process.getIOCounters()`

Chromium has removed access to this information.

## Planned Breaking API Changes (29.0)

### Behavior Changed: `ipcRenderer` can no longer be sent over the `contextBridge`

Attempting to send the entire `ipcRenderer` module as an object over the `contextBridge` will now result in
an empty object on the receiving side of the bridge. This change was made to remove / mitigate
a security footgun. You should not directly expose ipcRenderer or its methods over the bridge.
Instead, provide a safe wrapper like below:

```js
contextBridge.exposeInMainWorld('app', {
  onEvent: (cb) => ipcRenderer.on('foo', (e, ...args) => cb(args))
})
```

### Removed: `renderer-process-crashed` event on `app`

The `renderer-process-crashed` event on `app` has been removed.
Use the new `render-process-gone` event instead.

```js
// Removed
app.on('renderer-process-crashed', (event, webContents, killed) => { /* ... */ })

// Replace with
app.on('render-process-gone', (event, webContents, details) => { /* ... */ })
```

### Removed: `crashed` event on `WebContents` and `<webview>`

The `crashed` events on `WebContents` and `<webview>` have been removed.
Use the new `render-process-gone` event instead.

```js
// Removed
win.webContents.on('crashed', (event, killed) => { /* ... */ })
webview.addEventListener('crashed', (event) => { /* ... */ })

// Replace with
win.webContents.on('render-process-gone', (event, details) => { /* ... */ })
webview.addEventListener('render-process-gone', (event) => { /* ... */ })
```

### Removed: `gpu-process-crashed` event on `app`

The `gpu-process-crashed` event on `app` has been removed.
Use the new `child-process-gone` event instead.

```js
// Removed
app.on('gpu-process-crashed', (event, killed) => { /* ... */ })

// Replace with
app.on('child-process-gone', (event, details) => { /* ... */ })
```

## Planned Breaking API Changes (28.0)

### Behavior Changed: `WebContents.backgroundThrottling` set to false affects all `WebContents` in the host `BrowserWindow`

`WebContents.backgroundThrottling` set to false will disable frames throttling
in the `BrowserWindow` for all `WebContents` displayed by it.

### Removed: `BrowserWindow.setTrafficLightPosition(position)`

`BrowserWindow.setTrafficLightPosition(position)` has been removed, the
`BrowserWindow.setWindowButtonPosition(position)` API should be used instead
which accepts `null` instead of `{ x: 0, y: 0 }` to reset the position to
system default.

```js
// Removed in Electron 28
win.setTrafficLightPosition({ x: 10, y: 10 })
win.setTrafficLightPosition({ x: 0, y: 0 })

// Replace with
win.setWindowButtonPosition({ x: 10, y: 10 })
win.setWindowButtonPosition(null)
```

### Removed: `BrowserWindow.getTrafficLightPosition()`

`BrowserWindow.getTrafficLightPosition()` has been removed, the
`BrowserWindow.getWindowButtonPosition()` API should be used instead
which returns `null` instead of `{ x: 0, y: 0 }` when there is no custom
position.

```js
// Removed in Electron 28
const pos = win.getTrafficLightPosition()
if (pos.x === 0 && pos.y === 0) {
  // No custom position.
}

// Replace with
const ret = win.getWindowButtonPosition()
if (ret === null) {
  // No custom position.
}
```

### Removed: `ipcRenderer.sendTo()`

The `ipcRenderer.sendTo()` API has been removed. It should be replaced by setting up a [`MessageChannel`](tutorial/message-ports.md#setting-up-a-messagechannel-between-two-renderers) between the renderers.

The `senderId` and `senderIsMainFrame` properties of `IpcRendererEvent` have been removed as well.

### Removed: `app.runningUnderRosettaTranslation`

The `app.runningUnderRosettaTranslation` property has been removed.
Use `app.runningUnderARM64Translation` instead.

```js
// Removed
console.log(app.runningUnderRosettaTranslation)
// Replace with
console.log(app.runningUnderARM64Translation)
```

### Deprecated: `renderer-process-crashed` event on `app`

The `renderer-process-crashed` event on `app` has been deprecated.
Use the new `render-process-gone` event instead.

```js
// Deprecated
app.on('renderer-process-crashed', (event, webContents, killed) => { /* ... */ })

// Replace with
app.on('render-process-gone', (event, webContents, details) => { /* ... */ })
```

### Deprecated: `params.inputFormType` property on `context-menu` on `WebContents`

The `inputFormType` property of the params object in the `context-menu`
event from `WebContents` has been deprecated. Use the new `formControlType`
property instead.

### Deprecated: `crashed` event on `WebContents` and `<webview>`

The `crashed` events on `WebContents` and `<webview>` have been deprecated.
Use the new `render-process-gone` event instead.

```js
// Deprecated
win.webContents.on('crashed', (event, killed) => { /* ... */ })
webview.addEventListener('crashed', (event) => { /* ... */ })

// Replace with
win.webContents.on('render-process-gone', (event, details) => { /* ... */ })
webview.addEventListener('render-process-gone', (event) => { /* ... */ })
```

### Deprecated: `gpu-process-crashed` event on `app`

The `gpu-process-crashed` event on `app` has been deprecated.
Use the new `child-process-gone` event instead.

```js
// Deprecated
app.on('gpu-process-crashed', (event, killed) => { /* ... */ })

// Replace with
app.on('child-process-gone', (event, details) => { /* ... */ })
```

## Planned Breaking API Changes (27.0)

### Removed: macOS 10.13 / 10.14 support

macOS 10.13 (High Sierra) and macOS 10.14 (Mojave) are no longer supported by [Chromium](https://chromium-review.googlesource.com/c/chromium/src/+/4629466).

Older versions of Electron will continue to run on these operating systems, but macOS 10.15 (Catalina)
or later will be required to run Electron v27.0.0 and higher.

### Deprecated: `ipcRenderer.sendTo()`

The `ipcRenderer.sendTo()` API has been deprecated. It should be replaced by setting up a [`MessageChannel`](tutorial/message-ports.md#setting-up-a-messagechannel-between-two-renderers) between the renderers.

The `senderId` and `senderIsMainFrame` properties of `IpcRendererEvent` have been deprecated as well.

### Removed: color scheme events in `systemPreferences`

The following `systemPreferences` events have been removed:

* `inverted-color-scheme-changed`
* `high-contrast-color-scheme-changed`

Use the new `updated` event on the `nativeTheme` module instead.

```js
// Removed
systemPreferences.on('inverted-color-scheme-changed', () => { /* ... */ })
systemPreferences.on('high-contrast-color-scheme-changed', () => { /* ... */ })

// Replace with
nativeTheme.on('updated', () => { /* ... */ })
```

### Removed: Some `window.setVibrancy` options on macOS

The following vibrancy options have been removed:

* 'light'
* 'medium-light'
* 'dark'
* 'ultra-dark'
* 'appearance-based'

These were previously deprecated and have been removed by Apple in 10.15.

### Removed: `webContents.getPrinters`

The `webContents.getPrinters` method has been removed. Use
`webContents.getPrintersAsync` instead.

```js
const w = new BrowserWindow({ show: false })

// Removed
console.log(w.webContents.getPrinters())
// Replace with
w.webContents.getPrintersAsync().then((printers) => {
  console.log(printers)
})
```

### Removed: `systemPreferences.{get,set}AppLevelAppearance` and `systemPreferences.appLevelAppearance`

The `systemPreferences.getAppLevelAppearance` and `systemPreferences.setAppLevelAppearance`
methods have been removed, as well as the `systemPreferences.appLevelAppearance` property.
Use the `nativeTheme` module instead.

```js
// Removed
systemPreferences.getAppLevelAppearance()
// Replace with
nativeTheme.shouldUseDarkColors

// Removed
systemPreferences.appLevelAppearance
// Replace with
nativeTheme.shouldUseDarkColors

// Removed
systemPreferences.setAppLevelAppearance('dark')
// Replace with
nativeTheme.themeSource = 'dark'
```

### Removed: `alternate-selected-control-text` value for `systemPreferences.getColor`

The `alternate-selected-control-text` value for `systemPreferences.getColor`
has been removed. Use `selected-content-background` instead.

```js
// Removed
systemPreferences.getColor('alternate-selected-control-text')
// Replace with
systemPreferences.getColor('selected-content-background')
```

## Planned Breaking API Changes (26.0)

### Deprecated: `webContents.getPrinters`

The `webContents.getPrinters` method has been deprecated. Use
`webContents.getPrintersAsync` instead.

```js
const w = new BrowserWindow({ show: false })

// Deprecated
console.log(w.webContents.getPrinters())
// Replace with
w.webContents.getPrintersAsync().then((printers) => {
  console.log(printers)
})
```

### Deprecated: `systemPreferences.{get,set}AppLevelAppearance` and `systemPreferences.appLevelAppearance`

The `systemPreferences.getAppLevelAppearance` and `systemPreferences.setAppLevelAppearance`
methods have been deprecated, as well as the `systemPreferences.appLevelAppearance` property.
Use the `nativeTheme` module instead.

```js
// Deprecated
systemPreferences.getAppLevelAppearance()
// Replace with
nativeTheme.shouldUseDarkColors

// Deprecated
systemPreferences.appLevelAppearance
// Replace with
nativeTheme.shouldUseDarkColors

// Deprecated
systemPreferences.setAppLevelAppearance('dark')
// Replace with
nativeTheme.themeSource = 'dark'
```

### Deprecated: `alternate-selected-control-text` value for `systemPreferences.getColor`

The `alternate-selected-control-text` value for `systemPreferences.getColor`
has been deprecated. Use `selected-content-background` instead.

```js
// Deprecated
systemPreferences.getColor('alternate-selected-control-text')
// Replace with
systemPreferences.getColor('selected-content-background')
```

## Planned Breaking API Changes (25.0)

### Deprecated: `protocol.{un,}{register,intercept}{Buffer,String,Stream,File,Http}Protocol` and `protocol.isProtocol{Registered,Intercepted}`

The `protocol.register*Protocol` and `protocol.intercept*Protocol` methods have
been replaced with [`protocol.handle`](api/protocol.md#protocolhandlescheme-handler).

The new method can either register a new protocol or intercept an existing
protocol, and responses can be of any type.

```js
// Deprecated in Electron 25
protocol.registerBufferProtocol('some-protocol', () => {
  callback({ mimeType: 'text/html', data: Buffer.from('<h5>Response</h5>') })
})

// Replace with
protocol.handle('some-protocol', () => {
  return new Response(
    Buffer.from('<h5>Response</h5>'), // Could also be a string or ReadableStream.
    { headers: { 'content-type': 'text/html' } }
  )
})
```

```js
// Deprecated in Electron 25
protocol.registerHttpProtocol('some-protocol', () => {
  callback({ url: 'https://electronjs.org' })
})

// Replace with
protocol.handle('some-protocol', () => {
  return net.fetch('https://electronjs.org')
})
```

```js
// Deprecated in Electron 25
protocol.registerFileProtocol('some-protocol', () => {
  callback({ filePath: '/path/to/my/file' })
})

// Replace with
protocol.handle('some-protocol', () => {
  return net.fetch('file:///path/to/my/file')
})
```

### Deprecated: `BrowserWindow.setTrafficLightPosition(position)`

`BrowserWindow.setTrafficLightPosition(position)` has been deprecated, the
`BrowserWindow.setWindowButtonPosition(position)` API should be used instead
which accepts `null` instead of `{ x: 0, y: 0 }` to reset the position to
system default.

```js
// Deprecated in Electron 25
win.setTrafficLightPosition({ x: 10, y: 10 })
win.setTrafficLightPosition({ x: 0, y: 0 })

// Replace with
win.setWindowButtonPosition({ x: 10, y: 10 })
win.setWindowButtonPosition(null)
```

### Deprecated: `BrowserWindow.getTrafficLightPosition()`

`BrowserWindow.getTrafficLightPosition()` has been deprecated, the
`BrowserWindow.getWindowButtonPosition()` API should be used instead
which returns `null` instead of `{ x: 0, y: 0 }` when there is no custom
position.

```js
// Deprecated in Electron 25
const pos = win.getTrafficLightPosition()
if (pos.x === 0 && pos.y === 0) {
  // No custom position.
}

// Replace with
const ret = win.getWindowButtonPosition()
if (ret === null) {
  // No custom position.
}
```

## Planned Breaking API Changes (24.0)

### API Changed: `nativeImage.createThumbnailFromPath(path, size)`

The `maxSize` parameter has been changed to `size` to reflect that the size passed in will be the size the thumbnail created. Previously, Windows would not scale the image up if it were smaller than `maxSize`, and
macOS would always set the size to `maxSize`. Behavior is now the same across platforms.

Updated Behavior:

```js
// a 128x128 image.
const imagePath = path.join('path', 'to', 'capybara.png')

// Scaling up a smaller image.
const upSize = { width: 256, height: 256 }
nativeImage.createThumbnailFromPath(imagePath, upSize).then(result => {
  console.log(result.getSize()) // { width: 256, height: 256 }
})

// Scaling down a larger image.
const downSize = { width: 64, height: 64 }
nativeImage.createThumbnailFromPath(imagePath, downSize).then(result => {
  console.log(result.getSize()) // { width: 64, height: 64 }
})
```

Previous Behavior (on Windows):

```js
// a 128x128 image
const imagePath = path.join('path', 'to', 'capybara.png')
const size = { width: 256, height: 256 }
nativeImage.createThumbnailFromPath(imagePath, size).then(result => {
  console.log(result.getSize()) // { width: 128, height: 128 }
})
```

## Planned Breaking API Changes (23.0)

### Behavior Changed: Draggable Regions on macOS

The implementation of draggable regions (using the CSS property `-webkit-app-region: drag`) has changed on macOS to bring it in line with Windows and Linux. Previously, when a region with `-webkit-app-region: no-drag` overlapped a region with `-webkit-app-region: drag`, the `no-drag` region would always take precedence on macOS, regardless of CSS layering. That is, if a `drag` region was above a `no-drag` region, it would be ignored. Beginning in Electron 23, a `drag` region on top of a `no-drag` region will correctly cause the region to be draggable.

Additionally, the `customButtonsOnHover` BrowserWindow property previously created a draggable region which ignored the `-webkit-app-region` CSS property. This has now been fixed (see [#37210](https://github.com/electron/electron/issues/37210#issuecomment-1440509592) for discussion).

As a result, if your app uses a frameless window with draggable regions on macOS, the regions which are draggable in your app may change in Electron 23.

### Removed: Windows 7 / 8 / 8.1 support

[Windows 7, Windows 8, and Windows 8.1 are no longer supported](https://www.electronjs.org/blog/windows-7-to-8-1-deprecation-notice). Electron follows the planned Chromium deprecation policy, which will [deprecate Windows 7 support beginning in Chromium 109](https://support.google.com/chrome/thread/185534985/sunsetting-support-for-windows-7-8-8-1-in-early-2023?hl=en).

Older versions of Electron will continue to run on these operating systems, but Windows 10 or later will be required to run Electron v23.0.0 and higher.

### Removed: BrowserWindow `scroll-touch-*` events

The deprecated `scroll-touch-begin`, `scroll-touch-end` and `scroll-touch-edge`
events on BrowserWindow have been removed. Instead, use the newly available
[`input-event` event](api/web-contents.md#event-input-event) on WebContents.

```js
// Removed in Electron 23.0
win.on('scroll-touch-begin', scrollTouchBegin)
win.on('scroll-touch-edge', scrollTouchEdge)
win.on('scroll-touch-end', scrollTouchEnd)

// Replace with
win.webContents.on('input-event', (_, event) => {
  if (event.type === 'gestureScrollBegin') {
    scrollTouchBegin()
  } else if (event.type === 'gestureScrollUpdate') {
    scrollTouchEdge()
  } else if (event.type === 'gestureScrollEnd') {
    scrollTouchEnd()
  }
})
```

### Removed: `webContents.incrementCapturerCount(stayHidden, stayAwake)`

The `webContents.incrementCapturerCount(stayHidden, stayAwake)` function has been removed.
It is now automatically handled by `webContents.capturePage` when a page capture completes.

```js
const w = new BrowserWindow({ show: false })

// Removed in Electron 23
w.webContents.incrementCapturerCount()
w.capturePage().then(image => {
  console.log(image.toDataURL())
  w.webContents.decrementCapturerCount()
})

// Replace with
w.capturePage().then(image => {
  console.log(image.toDataURL())
})
```

### Removed: `webContents.decrementCapturerCount(stayHidden, stayAwake)`

The `webContents.decrementCapturerCount(stayHidden, stayAwake)` function has been removed.
It is now automatically handled by `webContents.capturePage` when a page capture completes.

```js
const w = new BrowserWindow({ show: false })

// Removed in Electron 23
w.webContents.incrementCapturerCount()
w.capturePage().then(image => {
  console.log(image.toDataURL())
  w.webContents.decrementCapturerCount()
})

// Replace with
w.capturePage().then(image => {
  console.log(image.toDataURL())
})
```

## Planned Breaking API Changes (22.0)

### Deprecated: `webContents.incrementCapturerCount(stayHidden, stayAwake)`

`webContents.incrementCapturerCount(stayHidden, stayAwake)` has been deprecated.
It is now automatically handled by `webContents.capturePage` when a page capture completes.

```js
const w = new BrowserWindow({ show: false })

// Removed in Electron 23
w.webContents.incrementCapturerCount()
w.capturePage().then(image => {
  console.log(image.toDataURL())
  w.webContents.decrementCapturerCount()
})

// Replace with
w.capturePage().then(image => {
  console.log(image.toDataURL())
})
```

### Deprecated: `webContents.decrementCapturerCount(stayHidden, stayAwake)`

`webContents.decrementCapturerCount(stayHidden, stayAwake)` has been deprecated.
It is now automatically handled by `webContents.capturePage` when a page capture completes.

```js
const w = new BrowserWindow({ show: false })

// Removed in Electron 23
w.webContents.incrementCapturerCount()
w.capturePage().then(image => {
  console.log(image.toDataURL())
  w.webContents.decrementCapturerCount()
})

// Replace with
w.capturePage().then(image => {
  console.log(image.toDataURL())
})
```

### Removed: WebContents `new-window` event

The `new-window` event of WebContents has been removed. It is replaced by [`webContents.setWindowOpenHandler()`](api/web-contents.md#contentssetwindowopenhandlerhandler).

```js
// Removed in Electron 22
webContents.on('new-window', (event) => {
  event.preventDefault()
})

// Replace with
webContents.setWindowOpenHandler((details) => {
  return { action: 'deny' }
})
```

### Removed: `<webview>` `new-window` event

The `new-window` event of `<webview>` has been removed. There is no direct replacement.

```js
// Removed in Electron 22
webview.addEventListener('new-window', (event) => {})
```

```js
// Replace with

// main.js
mainWindow.webContents.on('did-attach-webview', (event, wc) => {
  wc.setWindowOpenHandler((details) => {
    mainWindow.webContents.send('webview-new-window', wc.id, details)
    return { action: 'deny' }
  })
})

// preload.js
const { ipcRenderer } = require('electron')
ipcRenderer.on('webview-new-window', (e, webContentsId, details) => {
  console.log('webview-new-window', webContentsId, details)
  document.getElementById('webview').dispatchEvent(new Event('new-window'))
})

// renderer.js
document.getElementById('webview').addEventListener('new-window', () => {
  console.log('got new-window event')
})
```

### Deprecated: BrowserWindow `scroll-touch-*` events

The `scroll-touch-begin`, `scroll-touch-end` and `scroll-touch-edge` events on
BrowserWindow are deprecated. Instead, use the newly available
[`input-event` event](api/web-contents.md#event-input-event) on WebContents.

```js
// Deprecated
win.on('scroll-touch-begin', scrollTouchBegin)
win.on('scroll-touch-edge', scrollTouchEdge)
win.on('scroll-touch-end', scrollTouchEnd)

// Replace with
win.webContents.on('input-event', (_, event) => {
  if (event.type === 'gestureScrollBegin') {
    scrollTouchBegin()
  } else if (event.type === 'gestureScrollUpdate') {
    scrollTouchEdge()
  } else if (event.type === 'gestureScrollEnd') {
    scrollTouchEnd()
  }
})
```

## Planned Breaking API Changes (21.0)

### Behavior Changed: V8 Memory Cage enabled

The V8 memory cage has been enabled, which has implications for native modules
which wrap non-V8 memory with `ArrayBuffer` or `Buffer`. See the
[blog post about the V8 memory cage](https://www.electronjs.org/blog/v8-memory-cage) for
more details.

### API Changed: `webContents.printToPDF()`

`webContents.printToPDF()` has been modified to conform to [`Page.printToPDF`](https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-printToPDF) in the Chrome DevTools Protocol. This has been changes in order to
address changes upstream that made our previous implementation untenable and rife with bugs.

**Arguments Changed**

* `pageRanges`

**Arguments Removed**

* `printSelectionOnly`
* `marginsType`
* `headerFooter`
* `scaleFactor`

**Arguments Added**

* `headerTemplate`
* `footerTemplate`
* `displayHeaderFooter`
* `margins`
* `scale`
* `preferCSSPageSize`

```js
// Main process
const { webContents } = require('electron')

webContents.printToPDF({
  landscape: true,
  displayHeaderFooter: true,
  printBackground: true,
  scale: 2,
  pageSize: 'Ledger',
  margins: {
    top: 2,
    bottom: 2,
    left: 2,
    right: 2
  },
  pageRanges: '1-5, 8, 11-13',
  headerTemplate: '<h1>Title</h1>',
  footerTemplate: '<div><span class="pageNumber"></span></div>',
  preferCSSPageSize: true
}).then(data => {
  fs.writeFile(pdfPath, data, (error) => {
    if (error) throw error
    console.log(`Wrote PDF successfully to ${pdfPath}`)
  })
}).catch(error => {
  console.log(`Failed to write PDF to ${pdfPath}: `, error)
})
```

## Planned Breaking API Changes (20.0)

### Removed: macOS 10.11 / 10.12 support

macOS 10.11 (El Capitan) and macOS 10.12 (Sierra) are no longer supported by [Chromium](https://chromium-review.googlesource.com/c/chromium/src/+/3646050).

Older versions of Electron will continue to run on these operating systems, but macOS 10.13 (High Sierra)
or later will be required to run Electron v20.0.0 and higher.

### Default Changed: renderers without `nodeIntegration: true` are sandboxed by default

Previously, renderers that specified a preload script defaulted to being
unsandboxed. This meant that by default, preload scripts had access to Node.js.
In Electron 20, this default has changed. Beginning in Electron 20, renderers
will be sandboxed by default, unless `nodeIntegration: true` or `sandbox: false`
is specified.

If your preload scripts do not depend on Node, no action is needed. If your
preload scripts _do_ depend on Node, either refactor them to remove Node usage
from the renderer, or explicitly specify `sandbox: false` for the relevant
renderers.

### Removed: `skipTaskbar` on Linux

On X11, `skipTaskbar` sends a `_NET_WM_STATE_SKIP_TASKBAR` message to the X11
window manager. There is not a direct equivalent for Wayland, and the known
workarounds have unacceptable tradeoffs (e.g. Window.is_skip_taskbar in GNOME
requires unsafe mode), so Electron is unable to support this feature on Linux.

### API Changed: `session.setDevicePermissionHandler(handler)`

The handler invoked when `session.setDevicePermissionHandler(handler)` is used
has a change to its arguments.  This handler no longer is passed a frame
[`WebFrameMain`](api/web-frame-main.md), but instead is passed the `origin`, which
is the origin that is checking for device permission.

## Planned Breaking API Changes (19.0)

### Removed: IA32 Linux binaries

This is a result of Chromium 102.0.4999.0 dropping support for IA32 Linux.
This concludes the [removal of support for IA32 Linux](#removed-ia32-linux-support).

## Planned Breaking API Changes (18.0)

### Removed: `nativeWindowOpen`

Prior to Electron 15, `window.open` was by default shimmed to use
`BrowserWindowProxy`. This meant that `window.open('about:blank')` did not work
to open synchronously scriptable child windows, among other incompatibilities.
Since Electron 15, `nativeWindowOpen` has been enabled by default.

See the documentation for [window.open in Electron](api/window-open.md)
for more details.

## Planned Breaking API Changes (17.0)

### Removed: `desktopCapturer.getSources` in the renderer

The `desktopCapturer.getSources` API is now only available in the main process.
This has been changed in order to improve the default security of Electron
apps.

If you need this functionality, it can be replaced as follows:

```js
// Main process
const { ipcMain, desktopCapturer } = require('electron')

ipcMain.handle(
  'DESKTOP_CAPTURER_GET_SOURCES',
  (event, opts) => desktopCapturer.getSources(opts)
)
```

```js
// Renderer process
const { ipcRenderer } = require('electron')

const desktopCapturer = {
  getSources: (opts) => ipcRenderer.invoke('DESKTOP_CAPTURER_GET_SOURCES', opts)
}
```

However, you should consider further restricting the information returned to
the renderer; for instance, displaying a source selector to the user and only
returning the selected source.

### Deprecated: `nativeWindowOpen`

Prior to Electron 15, `window.open` was by default shimmed to use
`BrowserWindowProxy`. This meant that `window.open('about:blank')` did not work
to open synchronously scriptable child windows, among other incompatibilities.
Since Electron 15, `nativeWindowOpen` has been enabled by default.

See the documentation for [window.open in Electron](api/window-open.md)
for more details.

## Planned Breaking API Changes (16.0)

### Behavior Changed: `crashReporter` implementation switched to Crashpad on Linux

The underlying implementation of the `crashReporter` API on Linux has changed
from Breakpad to Crashpad, bringing it in line with Windows and Mac. As a
result of this, child processes are now automatically monitored, and calling
`process.crashReporter.start` in Node child processes is no longer needed (and
is not advisable, as it will start a second instance of the Crashpad reporter).

There are also some subtle changes to how annotations will be reported on
Linux, including that long values will no longer be split between annotations
appended with `__1`, `__2` and so on, and instead will be truncated at the
(new, longer) annotation value limit.

### Deprecated: `desktopCapturer.getSources` in the renderer

Usage of the `desktopCapturer.getSources` API in the renderer has been
deprecated and will be removed. This change improves the default security of
Electron apps.

See [here](#removed-desktopcapturergetsources-in-the-renderer) for details on
how to replace this API in your app.

## Planned Breaking API Changes (15.0)

### Default Changed: `nativeWindowOpen` defaults to `true`

Prior to Electron 15, `window.open` was by default shimmed to use
`BrowserWindowProxy`. This meant that `window.open('about:blank')` did not work
to open synchronously scriptable child windows, among other incompatibilities.
`nativeWindowOpen` is no longer experimental, and is now the default.

See the documentation for [window.open in Electron](api/window-open.md)
for more details.

### Deprecated: `app.runningUnderRosettaTranslation`

The `app.runningUnderRosettaTranslation` property has been deprecated.
Use `app.runningUnderARM64Translation` instead.

```js
// Deprecated
console.log(app.runningUnderRosettaTranslation)
// Replace with
console.log(app.runningUnderARM64Translation)
```

## Planned Breaking API Changes (14.0)

### Removed: `remote` module

The `remote` module was deprecated in Electron 12, and will be removed in
Electron 14. It is replaced by the
[`@electron/remote`](https://github.com/electron/remote) module.

```js
// Deprecated in Electron 12:
const { BrowserWindow } = require('electron').remote
```

```js
// Replace with:
const { BrowserWindow } = require('@electron/remote')

// In the main process:
require('@electron/remote/main').initialize()
```

### Removed: `app.allowRendererProcessReuse`

The `app.allowRendererProcessReuse` property will be removed as part of our plan to
more closely align with Chromium's process model for security, performance and maintainability.

For more detailed information see [#18397](https://github.com/electron/electron/issues/18397).

### Removed: Browser Window Affinity

The `affinity` option when constructing a new `BrowserWindow` will be removed
as part of our plan to more closely align with Chromium's process model for security,
performance and maintainability.

For more detailed information see [#18397](https://github.com/electron/electron/issues/18397).

### API Changed: `window.open()`

The optional parameter `frameName` will no longer set the title of the window. This now follows the specification described by the [native documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#parameters) under the corresponding parameter `windowName`.

If you were using this parameter to set the title of a window, you can instead use [win.setTitle(title)](api/browser-window.md#winsettitletitle).

### Removed: `worldSafeExecuteJavaScript`

In Electron 14, `worldSafeExecuteJavaScript` will be removed.  There is no alternative, please
ensure your code works with this property enabled.  It has been enabled by default since Electron
12.

You will be affected by this change if you use either `webFrame.executeJavaScript` or `webFrame.executeJavaScriptInIsolatedWorld`. You will need to ensure that values returned by either of those methods are supported by the [Context Bridge API](api/context-bridge.md#parameter--error--return-type-support) as these methods use the same value passing semantics.

### Removed: BrowserWindowConstructorOptions inheriting from parent windows

Prior to Electron 14, windows opened with `window.open` would inherit
BrowserWindow constructor options such as `transparent` and `resizable` from
their parent window. Beginning with Electron 14, this behavior is removed, and
windows will not inherit any BrowserWindow constructor options from their
parents.

Instead, explicitly set options for the new window with `setWindowOpenHandler`:

```js
webContents.setWindowOpenHandler((details) => {
  return {
    action: 'allow',
    overrideBrowserWindowOptions: {
      // ...
    }
  }
})
```

### Removed: `additionalFeatures`

The deprecated `additionalFeatures` property in the `new-window` and
`did-create-window` events of WebContents has been removed. Since `new-window`
uses positional arguments, the argument is still present, but will always be
the empty array `[]`. (Though note, the `new-window` event itself is
deprecated, and is replaced by `setWindowOpenHandler`.) Bare keys in window
features will now present as keys with the value `true` in the options object.

```js
// Removed in Electron 14
// Triggered by window.open('...', '', 'my-key')
webContents.on('did-create-window', (window, details) => {
  if (details.additionalFeatures.includes('my-key')) {
    // ...
  }
})

// Replace with
webContents.on('did-create-window', (window, details) => {
  if (details.options['my-key']) {
    // ...
  }
})
```

## Planned Breaking API Changes (13.0)

### API Changed: `session.setPermissionCheckHandler(handler)`

The `handler` methods first parameter was previously always a `webContents`, it can now sometimes be `null`.  You should use the `requestingOrigin`, `embeddingOrigin` and `securityOrigin` properties to respond to the permission check correctly.  As the `webContents` can be `null` it can no longer be relied on.

```js
// Old code
session.setPermissionCheckHandler((webContents, permission) => {
  if (webContents.getURL().startsWith('https://google.com/') && permission === 'notification') {
    return true
  }
  return false
})

// Replace with
session.setPermissionCheckHandler((webContents, permission, requestingOrigin) => {
  if (new URL(requestingOrigin).hostname === 'google.com' && permission === 'notification') {
    return true
  }
  return false
})
```

### Removed: `shell.moveItemToTrash()`

The deprecated synchronous `shell.moveItemToTrash()` API has been removed. Use
the asynchronous `shell.trashItem()` instead.

```js
// Removed in Electron 13
shell.moveItemToTrash(path)
// Replace with
shell.trashItem(path).then(/* ... */)
```

### Removed: `BrowserWindow` extension APIs

The deprecated extension APIs have been removed:

* `BrowserWindow.addExtension(path)`
* `BrowserWindow.addDevToolsExtension(path)`
* `BrowserWindow.removeExtension(name)`
* `BrowserWindow.removeDevToolsExtension(name)`
* `BrowserWindow.getExtensions()`
* `BrowserWindow.getDevToolsExtensions()`

Use the session APIs instead:

* `ses.loadExtension(path)`
* `ses.removeExtension(extension_id)`
* `ses.getAllExtensions()`

```js
// Removed in Electron 13
BrowserWindow.addExtension(path)
BrowserWindow.addDevToolsExtension(path)
// Replace with
session.defaultSession.loadExtension(path)
```

```js
// Removed in Electron 13
BrowserWindow.removeExtension(name)
BrowserWindow.removeDevToolsExtension(name)
// Replace with
session.defaultSession.removeExtension(extension_id)
```

```js
// Removed in Electron 13
BrowserWindow.getExtensions()
BrowserWindow.getDevToolsExtensions()
// Replace with
session.defaultSession.getAllExtensions()
```

### Removed: methods in `systemPreferences`

The following `systemPreferences` methods have been deprecated:

* `systemPreferences.isDarkMode()`
* `systemPreferences.isInvertedColorScheme()`
* `systemPreferences.isHighContrastColorScheme()`

Use the following `nativeTheme` properties instead:

* `nativeTheme.shouldUseDarkColors`
* `nativeTheme.shouldUseInvertedColorScheme`
* `nativeTheme.shouldUseHighContrastColors`

```js
// Removed in Electron 13
systemPreferences.isDarkMode()
// Replace with
nativeTheme.shouldUseDarkColors

// Removed in Electron 13
systemPreferences.isInvertedColorScheme()
// Replace with
nativeTheme.shouldUseInvertedColorScheme

// Removed in Electron 13
systemPreferences.isHighContrastColorScheme()
// Replace with
nativeTheme.shouldUseHighContrastColors
```

### Deprecated: WebContents `new-window` event

The `new-window` event of WebContents has been deprecated. It is replaced by [`webContents.setWindowOpenHandler()`](api/web-contents.md#contentssetwindowopenhandlerhandler).

```js
// Deprecated in Electron 13
webContents.on('new-window', (event) => {
  event.preventDefault()
})

// Replace with
webContents.setWindowOpenHandler((details) => {
  return { action: 'deny' }
})
```

## Planned Breaking API Changes (12.0)

### Removed: Pepper Flash support

Chromium has removed support for Flash, and so we must follow suit. See
Chromium's [Flash Roadmap](https://www.chromium.org/flash-roadmap) for more
details.

### Default Changed: `worldSafeExecuteJavaScript` defaults to `true`

In Electron 12, `worldSafeExecuteJavaScript` will be enabled by default.  To restore
the previous behavior, `worldSafeExecuteJavaScript: false` must be specified in WebPreferences.
Please note that setting this option to `false` is **insecure**.

This option will be removed in Electron 14 so please migrate your code to support the default
value.

### Default Changed: `contextIsolation` defaults to `true`

In Electron 12, `contextIsolation` will be enabled by default.  To restore
the previous behavior, `contextIsolation: false` must be specified in WebPreferences.

We [recommend having contextIsolation enabled](tutorial/security.md#3-enable-context-isolation) for the security of your application.

Another implication is that `require()` cannot be used in the renderer process unless
`nodeIntegration` is `true` and `contextIsolation` is `false`.

For more details see: https://github.com/electron/electron/issues/23506

### Removed: `crashReporter.getCrashesDirectory()`

The `crashReporter.getCrashesDirectory` method has been removed. Usage
should be replaced by `app.getPath('crashDumps')`.

```js
// Removed in Electron 12
crashReporter.getCrashesDirectory()
// Replace with
app.getPath('crashDumps')
```

### Removed: `crashReporter` methods in the renderer process

The following `crashReporter` methods are no longer available in the renderer
process:

* `crashReporter.start`
* `crashReporter.getLastCrashReport`
* `crashReporter.getUploadedReports`
* `crashReporter.getUploadToServer`
* `crashReporter.setUploadToServer`
* `crashReporter.getCrashesDirectory`

They should be called only from the main process.

See [#23265](https://github.com/electron/electron/pull/23265) for more details.

### Default Changed: `crashReporter.start({ compress: true })`

The default value of the `compress` option to `crashReporter.start` has changed
from `false` to `true`. This means that crash dumps will be uploaded to the
crash ingestion server with the `Content-Encoding: gzip` header, and the body
will be compressed.

If your crash ingestion server does not support compressed payloads, you can
turn off compression by specifying `{ compress: false }` in the crash reporter
options.

### Deprecated: `remote` module

The `remote` module is deprecated in Electron 12, and will be removed in
Electron 14. It is replaced by the
[`@electron/remote`](https://github.com/electron/remote) module.

```js
// Deprecated in Electron 12:
const { BrowserWindow } = require('electron').remote
```

```js
// Replace with:
const { BrowserWindow } = require('@electron/remote')

// In the main process:
require('@electron/remote/main').initialize()
```

### Deprecated: `shell.moveItemToTrash()`

The synchronous `shell.moveItemToTrash()` has been replaced by the new,
asynchronous `shell.trashItem()`.

```js
// Deprecated in Electron 12
shell.moveItemToTrash(path)
// Replace with
shell.trashItem(path).then(/* ... */)
```

## Planned Breaking API Changes (11.0)

### Removed: `BrowserView.{destroy, fromId, fromWebContents, getAllViews}` and `id` property of `BrowserView`

The experimental APIs `BrowserView.{destroy, fromId, fromWebContents, getAllViews}`
have now been removed. Additionally, the `id` property of `BrowserView`
has also been removed.

For more detailed information, see [#23578](https://github.com/electron/electron/pull/23578).

## Planned Breaking API Changes (10.0)

### Deprecated: `companyName` argument to `crashReporter.start()`

The `companyName` argument to `crashReporter.start()`, which was previously
required, is now optional, and further, is deprecated. To get the same
behavior in a non-deprecated way, you can pass a `companyName` value in
`globalExtra`.

```js
// Deprecated in Electron 10
crashReporter.start({ companyName: 'Umbrella Corporation' })
// Replace with
crashReporter.start({ globalExtra: { _companyName: 'Umbrella Corporation' } })
```

### Deprecated: `crashReporter.getCrashesDirectory()`

The `crashReporter.getCrashesDirectory` method has been deprecated. Usage
should be replaced by `app.getPath('crashDumps')`.

```js
// Deprecated in Electron 10
crashReporter.getCrashesDirectory()
// Replace with
app.getPath('crashDumps')
```

### Deprecated: `crashReporter` methods in the renderer process

Calling the following `crashReporter` methods from the renderer process is
deprecated:

* `crashReporter.start`
* `crashReporter.getLastCrashReport`
* `crashReporter.getUploadedReports`
* `crashReporter.getUploadToServer`
* `crashReporter.setUploadToServer`
* `crashReporter.getCrashesDirectory`

The only non-deprecated methods remaining in the `crashReporter` module in the
renderer are `addExtraParameter`, `removeExtraParameter` and `getParameters`.

All above methods remain non-deprecated when called from the main process.

See [#23265](https://github.com/electron/electron/pull/23265) for more details.

### Deprecated: `crashReporter.start({ compress: false })`

Setting `{ compress: false }` in `crashReporter.start` is deprecated. Nearly
all crash ingestion servers support gzip compression. This option will be
removed in a future version of Electron.

### Default Changed: `enableRemoteModule` defaults to `false`

In Electron 9, using the remote module without explicitly enabling it via the
`enableRemoteModule` WebPreferences option began emitting a warning. In
Electron 10, the remote module is now disabled by default. To use the remote
module, `enableRemoteModule: true` must be specified in WebPreferences:

```js
const w = new BrowserWindow({
  webPreferences: {
    enableRemoteModule: true
  }
})
```

We [recommend moving away from the remote module](https://medium.com/@nornagon/electrons-remote-module-considered-harmful-70d69500f31).

### `protocol.unregisterProtocol`

### `protocol.uninterceptProtocol`

The APIs are now synchronous and the optional callback is no longer needed.

```js
// Deprecated
protocol.unregisterProtocol(scheme, () => { /* ... */ })
// Replace with
protocol.unregisterProtocol(scheme)
```

### `protocol.registerFileProtocol`

### `protocol.registerBufferProtocol`

### `protocol.registerStringProtocol`

### `protocol.registerHttpProtocol`

### `protocol.registerStreamProtocol`

### `protocol.interceptFileProtocol`

### `protocol.interceptStringProtocol`

### `protocol.interceptBufferProtocol`

### `protocol.interceptHttpProtocol`

### `protocol.interceptStreamProtocol`

The APIs are now synchronous and the optional callback is no longer needed.

```js
// Deprecated
protocol.registerFileProtocol(scheme, handler, () => { /* ... */ })
// Replace with
protocol.registerFileProtocol(scheme, handler)
```

The registered or intercepted protocol does not have effect on current page
until navigation happens.

### `protocol.isProtocolHandled`

This API is deprecated and users should use `protocol.isProtocolRegistered`
and `protocol.isProtocolIntercepted` instead.

```js
// Deprecated
protocol.isProtocolHandled(scheme).then(() => { /* ... */ })
// Replace with
const isRegistered = protocol.isProtocolRegistered(scheme)
const isIntercepted = protocol.isProtocolIntercepted(scheme)
```

## Planned Breaking API Changes (9.0)

### Default Changed: Loading non-context-aware native modules in the renderer process is disabled by default

As of Electron 9 we do not allow loading of non-context-aware native modules in
the renderer process.  This is to improve security, performance and maintainability
of Electron as a project.

If this impacts you, you can temporarily set `app.allowRendererProcessReuse` to `false`
to revert to the old behavior.  This flag will only be an option until Electron 11 so
you should plan to update your native modules to be context aware.

For more detailed information see [#18397](https://github.com/electron/electron/issues/18397).

### Deprecated: `BrowserWindow` extension APIs

The following extension APIs have been deprecated:

* `BrowserWindow.addExtension(path)`
* `BrowserWindow.addDevToolsExtension(path)`
* `BrowserWindow.removeExtension(name)`
* `BrowserWindow.removeDevToolsExtension(name)`
* `BrowserWindow.getExtensions()`
* `BrowserWindow.getDevToolsExtensions()`

Use the session APIs instead:

* `ses.loadExtension(path)`
* `ses.removeExtension(extension_id)`
* `ses.getAllExtensions()`

```js
// Deprecated in Electron 9
BrowserWindow.addExtension(path)
BrowserWindow.addDevToolsExtension(path)
// Replace with
session.defaultSession.loadExtension(path)
```

```js
// Deprecated in Electron 9
BrowserWindow.removeExtension(name)
BrowserWindow.removeDevToolsExtension(name)
// Replace with
session.defaultSession.removeExtension(extension_id)
```

```js
// Deprecated in Electron 9
BrowserWindow.getExtensions()
BrowserWindow.getDevToolsExtensions()
// Replace with
session.defaultSession.getAllExtensions()
```

### Removed: `<webview>.getWebContents()`

This API, which was deprecated in Electron 8.0, is now removed.

```js
// Removed in Electron 9.0
webview.getWebContents()
// Replace with
const { remote } = require('electron')
remote.webContents.fromId(webview.getWebContentsId())
```

### Removed: `webFrame.setLayoutZoomLevelLimits()`

Chromium has removed support for changing the layout zoom level limits, and it
is beyond Electron's capacity to maintain it. The function was deprecated in
Electron 8.x, and has been removed in Electron 9.x. The layout zoom level limits
are now fixed at a minimum of 0.25 and a maximum of 5.0, as defined
[here](https://chromium.googlesource.com/chromium/src/+/938b37a6d2886bf8335fc7db792f1eb46c65b2ae/third_party/blink/common/page/page_zoom.cc#11).

### Behavior Changed: Sending non-JS objects over IPC now throws an exception

In Electron 8.0, IPC was changed to use the Structured Clone Algorithm,
bringing significant performance improvements. To help ease the transition, the
old IPC serialization algorithm was kept and used for some objects that aren't
serializable with Structured Clone. In particular, DOM objects (e.g. `Element`,
`Location` and `DOMMatrix`), Node.js objects backed by C++ classes (e.g.
`process.env`, some members of `Stream`), and Electron objects backed by C++
classes (e.g. `WebContents`, `BrowserWindow` and `WebFrame`) are not
serializable with Structured Clone. Whenever the old algorithm was invoked, a
deprecation warning was printed.

In Electron 9.0, the old serialization algorithm has been removed, and sending
such non-serializable objects will now throw an "object could not be cloned"
error.

### API Changed: `shell.openItem` is now `shell.openPath`

The `shell.openItem` API has been replaced with an asynchronous `shell.openPath` API.
You can see the original API proposal and reasoning [here](https://github.com/electron/governance/blob/main/wg-api/spec-documents/shell-openitem.md).

## Planned Breaking API Changes (8.0)

### Behavior Changed: Values sent over IPC are now serialized with Structured Clone Algorithm

The algorithm used to serialize objects sent over IPC (through `ipcRenderer.send`,
`ipcRenderer.sendSync`, `WebContents.send` and related methods) has been switched from a custom
algorithm to V8's built-in [Structured Clone Algorithm][SCA], the same algorithm used to serialize
messages for `postMessage`. This brings about a 2x performance improvement for large messages,
but also brings some breaking changes in behavior.

* Sending Functions, Promises, WeakMaps, WeakSets, or objects containing any
  such values, over IPC will now throw an exception, instead of silently
  converting the functions to `undefined`.

```js
// Previously:
ipcRenderer.send('channel', { value: 3, someFunction: () => {} })
// => results in { value: 3 } arriving in the main process

// From Electron 8:
ipcRenderer.send('channel', { value: 3, someFunction: () => {} })
// => throws Error("() => {} could not be cloned.")
```

* `NaN`, `Infinity` and `-Infinity` will now be correctly serialized, instead
  of being converted to `null`.
* Objects containing cyclic references will now be correctly serialized,
  instead of being converted to `null`.
* `Set`, `Map`, `Error` and `RegExp` values will be correctly serialized,
  instead of being converted to `{}`.
* `BigInt` values will be correctly serialized, instead of being converted to
  `null`.
* Sparse arrays will be serialized as such, instead of being converted to dense
  arrays with `null`s.
* `Date` objects will be transferred as `Date` objects, instead of being
  converted to their ISO string representation.
* Typed Arrays (such as `Uint8Array`, `Uint16Array`, `Uint32Array` and so on)
  will be transferred as such, instead of being converted to Node.js `Buffer`.
* Node.js `Buffer` objects will be transferred as `Uint8Array`s. You can
  convert a `Uint8Array` back to a Node.js `Buffer` by wrapping the underlying
  `ArrayBuffer`:

```js
Buffer.from(value.buffer, value.byteOffset, value.byteLength)
```

Sending any objects that aren't native JS types, such as DOM objects (e.g.
`Element`, `Location`, `DOMMatrix`), Node.js objects (e.g. `process.env`,
`Stream`), or Electron objects (e.g. `WebContents`, `BrowserWindow`,
`WebFrame`) is deprecated. In Electron 8, these objects will be serialized as
before with a DeprecationWarning message, but starting in Electron 9, sending
these kinds of objects will throw a 'could not be cloned' error.

[SCA]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

### Deprecated: `<webview>.getWebContents()`

This API is implemented using the `remote` module, which has both performance
and security implications. Therefore its usage should be explicit.

```js
// Deprecated
webview.getWebContents()
// Replace with
const { remote } = require('electron')
remote.webContents.fromId(webview.getWebContentsId())
```

However, it is recommended to avoid using the `remote` module altogether.

```js
// main
const { ipcMain, webContents } = require('electron')

const getGuestForWebContents = (webContentsId, contents) => {
  const guest = webContents.fromId(webContentsId)
  if (!guest) {
    throw new Error(`Invalid webContentsId: ${webContentsId}`)
  }
  if (guest.hostWebContents !== contents) {
    throw new Error('Access denied to webContents')
  }
  return guest
}

ipcMain.handle('openDevTools', (event, webContentsId) => {
  const guest = getGuestForWebContents(webContentsId, event.sender)
  guest.openDevTools()
})

// renderer
const { ipcRenderer } = require('electron')

ipcRenderer.invoke('openDevTools', webview.getWebContentsId())
```

### Deprecated: `webFrame.setLayoutZoomLevelLimits()`

Chromium has removed support for changing the layout zoom level limits, and it
is beyond Electron's capacity to maintain it. The function will emit a warning
in Electron 8.x, and cease to exist in Electron 9.x. The layout zoom level
limits are now fixed at a minimum of 0.25 and a maximum of 5.0, as defined
[here](https://chromium.googlesource.com/chromium/src/+/938b37a6d2886bf8335fc7db792f1eb46c65b2ae/third_party/blink/common/page/page_zoom.cc#11).

### Deprecated events in `systemPreferences`

The following `systemPreferences` events have been deprecated:

* `inverted-color-scheme-changed`
* `high-contrast-color-scheme-changed`

Use the new `updated` event on the `nativeTheme` module instead.

```js
// Deprecated
systemPreferences.on('inverted-color-scheme-changed', () => { /* ... */ })
systemPreferences.on('high-contrast-color-scheme-changed', () => { /* ... */ })

// Replace with
nativeTheme.on('updated', () => { /* ... */ })
```

### Deprecated: methods in `systemPreferences`

The following `systemPreferences` methods have been deprecated:

* `systemPreferences.isDarkMode()`
* `systemPreferences.isInvertedColorScheme()`
* `systemPreferences.isHighContrastColorScheme()`

Use the following `nativeTheme` properties instead:

* `nativeTheme.shouldUseDarkColors`
* `nativeTheme.shouldUseInvertedColorScheme`
* `nativeTheme.shouldUseHighContrastColors`

```js
// Deprecated
systemPreferences.isDarkMode()
// Replace with
nativeTheme.shouldUseDarkColors

// Deprecated
systemPreferences.isInvertedColorScheme()
// Replace with
nativeTheme.shouldUseInvertedColorScheme

// Deprecated
systemPreferences.isHighContrastColorScheme()
// Replace with
nativeTheme.shouldUseHighContrastColors
```

## Planned Breaking API Changes (7.0)

### Deprecated: Atom.io Node Headers URL

This is the URL specified as `disturl` in a `.npmrc` file or as the `--dist-url`
command line flag when building native Node modules.  Both will be supported for
the foreseeable future but it is recommended that you switch.

Deprecated: https://atom.io/download/electron

Replace with: https://electronjs.org/headers

### API Changed: `session.clearAuthCache()` no longer accepts options

The `session.clearAuthCache` API no longer accepts options for what to clear, and instead unconditionally clears the whole cache.

```js
// Deprecated
session.clearAuthCache({ type: 'password' })
// Replace with
session.clearAuthCache()
```

### API Changed: `powerMonitor.querySystemIdleState` is now `powerMonitor.getSystemIdleState`

```js
// Removed in Electron 7.0
powerMonitor.querySystemIdleState(threshold, callback)
// Replace with synchronous API
const idleState = powerMonitor.getSystemIdleState(threshold)
```

### API Changed: `powerMonitor.querySystemIdleTime` is now `powerMonitor.getSystemIdleTime`

```js
// Removed in Electron 7.0
powerMonitor.querySystemIdleTime(callback)
// Replace with synchronous API
const idleTime = powerMonitor.getSystemIdleTime()
```

### API Changed: `webFrame.setIsolatedWorldInfo` replaces separate methods

```js
// Removed in Electron 7.0
webFrame.setIsolatedWorldContentSecurityPolicy(worldId, csp)
webFrame.setIsolatedWorldHumanReadableName(worldId, name)
webFrame.setIsolatedWorldSecurityOrigin(worldId, securityOrigin)
// Replace with
webFrame.setIsolatedWorldInfo(
  worldId,
  {
    securityOrigin: 'some_origin',
    name: 'human_readable_name',
    csp: 'content_security_policy'
  })
```

### Removed: `marked` property on `getBlinkMemoryInfo`

This property was removed in Chromium 77, and as such is no longer available.

### Behavior Changed: `webkitdirectory` attribute for `<input type="file"/>` now lists directory contents

The `webkitdirectory` property on HTML file inputs allows them to select folders.
Previous versions of Electron had an incorrect implementation where the `event.target.files`
of the input returned a `FileList` that returned one `File` corresponding to the selected folder.

As of Electron 7, that `FileList` is now list of all files contained within
the folder, similarly to Chrome, Firefox, and Edge
([link to MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory)).

As an illustration, take a folder with this structure:

```console
folder
├── file1
├── file2
└── file3
```

In Electron &lt;=6, this would return a `FileList` with a `File` object for:

```console
path/to/folder
```

In Electron 7, this now returns a `FileList` with a `File` object for:

```console
/path/to/folder/file3
/path/to/folder/file2
/path/to/folder/file1
```

Note that `webkitdirectory` no longer exposes the path to the selected folder.
If you require the path to the selected folder rather than the folder contents,
see the `dialog.showOpenDialog` API ([link](api/dialog.md#dialogshowopendialogwindow-options)).

### API Changed: Callback-based versions of promisified APIs

Electron 5 and Electron 6 introduced Promise-based versions of existing
asynchronous APIs and deprecated their older, callback-based counterparts.
In Electron 7, all deprecated callback-based APIs are now removed.

These functions now only return Promises:

* `app.getFileIcon()` [#15742](https://github.com/electron/electron/pull/15742)
* `app.dock.show()` [#16904](https://github.com/electron/electron/pull/16904)
* `contentTracing.getCategories()` [#16583](https://github.com/electron/electron/pull/16583)
* `contentTracing.getTraceBufferUsage()` [#16600](https://github.com/electron/electron/pull/16600)
* `contentTracing.startRecording()` [#16584](https://github.com/electron/electron/pull/16584)
* `contentTracing.stopRecording()` [#16584](https://github.com/electron/electron/pull/16584)
* `contents.executeJavaScript()` [#17312](https://github.com/electron/electron/pull/17312)
* `cookies.flushStore()` [#16464](https://github.com/electron/electron/pull/16464)
* `cookies.get()` [#16464](https://github.com/electron/electron/pull/16464)
* `cookies.remove()` [#16464](https://github.com/electron/electron/pull/16464)
* `cookies.set()` [#16464](https://github.com/electron/electron/pull/16464)
* `debugger.sendCommand()` [#16861](https://github.com/electron/electron/pull/16861)
* `dialog.showCertificateTrustDialog()` [#17181](https://github.com/electron/electron/pull/17181)
* `inAppPurchase.getProducts()` [#17355](https://github.com/electron/electron/pull/17355)
* `inAppPurchase.purchaseProduct()`[#17355](https://github.com/electron/electron/pull/17355)
* `netLog.stopLogging()` [#16862](https://github.com/electron/electron/pull/16862)
* `session.clearAuthCache()` [#17259](https://github.com/electron/electron/pull/17259)
* `session.clearCache()`  [#17185](https://github.com/electron/electron/pull/17185)
* `session.clearHostResolverCache()` [#17229](https://github.com/electron/electron/pull/17229)
* `session.clearStorageData()` [#17249](https://github.com/electron/electron/pull/17249)
* `session.getBlobData()` [#17303](https://github.com/electron/electron/pull/17303)
* `session.getCacheSize()`  [#17185](https://github.com/electron/electron/pull/17185)
* `session.resolveProxy()` [#17222](https://github.com/electron/electron/pull/17222)
* `session.setProxy()`  [#17222](https://github.com/electron/electron/pull/17222)
* `shell.openExternal()` [#16176](https://github.com/electron/electron/pull/16176)
* `webContents.loadFile()` [#15855](https://github.com/electron/electron/pull/15855)
* `webContents.loadURL()` [#15855](https://github.com/electron/electron/pull/15855)
* `webContents.hasServiceWorker()` [#16535](https://github.com/electron/electron/pull/16535)
* `webContents.printToPDF()` [#16795](https://github.com/electron/electron/pull/16795)
* `webContents.savePage()` [#16742](https://github.com/electron/electron/pull/16742)
* `webFrame.executeJavaScript()` [#17312](https://github.com/electron/electron/pull/17312)
* `webFrame.executeJavaScriptInIsolatedWorld()` [#17312](https://github.com/electron/electron/pull/17312)
* `webviewTag.executeJavaScript()` [#17312](https://github.com/electron/electron/pull/17312)
* `win.capturePage()` [#15743](https://github.com/electron/electron/pull/15743)

These functions now have two forms, synchronous and Promise-based asynchronous:

* `dialog.showMessageBox()`/`dialog.showMessageBoxSync()` [#17298](https://github.com/electron/electron/pull/17298)
* `dialog.showOpenDialog()`/`dialog.showOpenDialogSync()` [#16973](https://github.com/electron/electron/pull/16973)
* `dialog.showSaveDialog()`/`dialog.showSaveDialogSync()` [#17054](https://github.com/electron/electron/pull/17054)

## Planned Breaking API Changes (6.0)

### API Changed: `win.setMenu(null)` is now `win.removeMenu()`

```js
// Deprecated
win.setMenu(null)
// Replace with
win.removeMenu()
```

### API Changed: `electron.screen` in the renderer process should be accessed via `remote`

```js
// Deprecated
require('electron').screen
// Replace with
require('electron').remote.screen
```

### API Changed: `require()`ing node builtins in sandboxed renderers no longer implicitly loads the `remote` version

```js
// Deprecated
require('child_process')
// Replace with
require('electron').remote.require('child_process')

// Deprecated
require('fs')
// Replace with
require('electron').remote.require('fs')

// Deprecated
require('os')
// Replace with
require('electron').remote.require('os')

// Deprecated
require('path')
// Replace with
require('electron').remote.require('path')
```

### Deprecated: `powerMonitor.querySystemIdleState` replaced with `powerMonitor.getSystemIdleState`

```js
// Deprecated
powerMonitor.querySystemIdleState(threshold, callback)
// Replace with synchronous API
const idleState = powerMonitor.getSystemIdleState(threshold)
```

### Deprecated: `powerMonitor.querySystemIdleTime` replaced with `powerMonitor.getSystemIdleTime`

```js
// Deprecated
powerMonitor.querySystemIdleTime(callback)
// Replace with synchronous API
const idleTime = powerMonitor.getSystemIdleTime()
```

### Deprecated: `app.enableMixedSandbox()` is no longer needed

```js
// Deprecated
app.enableMixedSandbox()
```

Mixed-sandbox mode is now enabled by default.

### Deprecated: `Tray.setHighlightMode`

Under macOS Catalina our former Tray implementation breaks.
Apple's native substitute doesn't support changing the highlighting behavior.

```js
// Deprecated
tray.setHighlightMode(mode)
// API will be removed in v7.0 without replacement.
```

## Planned Breaking API Changes (5.0)

### Default Changed: `nodeIntegration` and `webviewTag` default to false, `contextIsolation` defaults to true

The following `webPreferences` option default values are deprecated in favor of the new defaults listed below.

| Property | Deprecated Default | New Default |
|----------|--------------------|-------------|
| `contextIsolation` | `false` | `true` |
| `nodeIntegration` | `true` | `false` |
| `webviewTag` | `nodeIntegration` if set else `true` | `false` |

E.g. Re-enabling the webviewTag

```js
const w = new BrowserWindow({
  webPreferences: {
    webviewTag: true
  }
})
```

### Behavior Changed: `nodeIntegration` in child windows opened via `nativeWindowOpen`

Child windows opened with the `nativeWindowOpen` option will always have Node.js integration disabled, unless `nodeIntegrationInSubFrames` is `true`.

### API Changed: Registering privileged schemes must now be done before app ready

Renderer process APIs `webFrame.registerURLSchemeAsPrivileged` and `webFrame.registerURLSchemeAsBypassingCSP` as well as browser process API `protocol.registerStandardSchemes` have been removed.
A new API, `protocol.registerSchemesAsPrivileged` has been added and should be used for registering custom schemes with the required privileges. Custom schemes are required to be registered before app ready.

### Deprecated: `webFrame.setIsolatedWorld*` replaced with `webFrame.setIsolatedWorldInfo`

```js
// Deprecated
webFrame.setIsolatedWorldContentSecurityPolicy(worldId, csp)
webFrame.setIsolatedWorldHumanReadableName(worldId, name)
webFrame.setIsolatedWorldSecurityOrigin(worldId, securityOrigin)
// Replace with
webFrame.setIsolatedWorldInfo(
  worldId,
  {
    securityOrigin: 'some_origin',
    name: 'human_readable_name',
    csp: 'content_security_policy'
  })
```

### API Changed: `webFrame.setSpellCheckProvider` now takes an asynchronous callback

The `spellCheck` callback is now asynchronous, and `autoCorrectWord` parameter has been removed.

```js
// Deprecated
webFrame.setSpellCheckProvider('en-US', true, {
  spellCheck: (text) => {
    return !spellchecker.isMisspelled(text)
  }
})
// Replace with
webFrame.setSpellCheckProvider('en-US', {
  spellCheck: (words, callback) => {
    callback(words.filter(text => spellchecker.isMisspelled(text)))
  }
})
```

### API Changed: `webContents.getZoomLevel` and `webContents.getZoomFactor` are now synchronous

`webContents.getZoomLevel` and `webContents.getZoomFactor` no longer take callback parameters,
instead directly returning their number values.

```js
// Deprecated
webContents.getZoomLevel((level) => {
  console.log(level)
})
// Replace with
const level = webContents.getZoomLevel()
console.log(level)
```

```js
// Deprecated
webContents.getZoomFactor((factor) => {
  console.log(factor)
})
// Replace with
const factor = webContents.getZoomFactor()
console.log(factor)
```

## Planned Breaking API Changes (4.0)

The following list includes the breaking API changes made in Electron 4.0.

### `app.makeSingleInstance`

```js
// Deprecated
app.makeSingleInstance((argv, cwd) => {
  /* ... */
})
// Replace with
app.requestSingleInstanceLock()
app.on('second-instance', (event, argv, cwd) => {
  /* ... */
})
```

### `app.releaseSingleInstance`

```js
// Deprecated
app.releaseSingleInstance()
// Replace with
app.releaseSingleInstanceLock()
```

### `app.getGPUInfo`

```js
app.getGPUInfo('complete')
// Now behaves the same with `basic` on macOS
app.getGPUInfo('basic')
```

### `win_delay_load_hook`

When building native modules for windows, the `win_delay_load_hook` variable in
the module's `binding.gyp` must be true (which is the default). If this hook is
not present, then the native module will fail to load on Windows, with an error
message like `Cannot find module`.
See the [native module guide](./tutorial/using-native-node-modules.md) for more.

### Removed: IA32 Linux support

Electron 18 will no longer run on 32-bit Linux systems. See [discontinuing support for 32-bit Linux](https://www.electronjs.org/blog/linux-32bit-support) for more information.

## Breaking API Changes (3.0)

The following list includes the breaking API changes in Electron 3.0.

### `app`

```js
// Deprecated
app.getAppMemoryInfo()
// Replace with
app.getAppMetrics()

// Deprecated
const metrics = app.getAppMetrics()
const { memory } = metrics[0] // Deprecated property
```

### `BrowserWindow`

```js
// Deprecated
const optionsA = { webPreferences: { blinkFeatures: '' } }
const windowA = new BrowserWindow(optionsA)
// Replace with
const optionsB = { webPreferences: { enableBlinkFeatures: '' } }
const windowB = new BrowserWindow(optionsB)

// Deprecated
window.on('app-command', (e, cmd) => {
  if (cmd === 'media-play_pause') {
    // do something
  }
})
// Replace with
window.on('app-command', (e, cmd) => {
  if (cmd === 'media-play-pause') {
    // do something
  }
})
```

### `clipboard`

```js
// Deprecated
clipboard.readRtf()
// Replace with
clipboard.readRTF()

// Deprecated
clipboard.writeRtf()
// Replace with
clipboard.writeRTF()

// Deprecated
clipboard.readHtml()
// Replace with
clipboard.readHTML()

// Deprecated
clipboard.writeHtml()
// Replace with
clipboard.writeHTML()
```

### `crashReporter`

```js
// Deprecated
crashReporter.start({
  companyName: 'Crashly',
  submitURL: 'https://crash.server.com',
  autoSubmit: true
})
// Replace with
crashReporter.start({
  companyName: 'Crashly',
  submitURL: 'https://crash.server.com',
  uploadToServer: true
})
```

### `nativeImage`

```js
// Deprecated
nativeImage.createFromBuffer(buffer, 1.0)
// Replace with
nativeImage.createFromBuffer(buffer, {
  scaleFactor: 1.0
})
```

### `process`

```js
// Deprecated
const info = process.getProcessMemoryInfo()
```

### `screen`

```js
// Deprecated
screen.getMenuBarHeight()
// Replace with
screen.getPrimaryDisplay().workArea
```

### `session`

```js
// Deprecated
ses.setCertificateVerifyProc((hostname, certificate, callback) => {
  callback(true)
})
// Replace with
ses.setCertificateVerifyProc((request, callback) => {
  callback(0)
})
```

### `Tray`

```js
// Deprecated
tray.setHighlightMode(true)
// Replace with
tray.setHighlightMode('on')

// Deprecated
tray.setHighlightMode(false)
// Replace with
tray.setHighlightMode('off')
```

### `webContents`

```js
// Deprecated
webContents.openDevTools({ detach: true })
// Replace with
webContents.openDevTools({ mode: 'detach' })

// Removed
webContents.setSize(options)
// There is no replacement for this API
```

### `webFrame`

```js
// Deprecated
webFrame.registerURLSchemeAsSecure('app')
// Replace with
protocol.registerStandardSchemes(['app'], { secure: true })

// Deprecated
webFrame.registerURLSchemeAsPrivileged('app', { secure: true })
// Replace with
protocol.registerStandardSchemes(['app'], { secure: true })
```

### `<webview>`

```js
// Removed
webview.setAttribute('disableguestresize', '')
// There is no replacement for this API

// Removed
webview.setAttribute('guestinstance', instanceId)
// There is no replacement for this API

// Keyboard listeners no longer work on webview tag
webview.onkeydown = () => { /* handler */ }
webview.onkeyup = () => { /* handler */ }
```

### Node Headers URL

This is the URL specified as `disturl` in a `.npmrc` file or as the `--dist-url`
command line flag when building native Node modules.

Deprecated: https://atom.io/download/atom-shell

Replace with: https://atom.io/download/electron

## Breaking API Changes (2.0)

The following list includes the breaking API changes made in Electron 2.0.

### `BrowserWindow`

```js
// Deprecated
const optionsA = { titleBarStyle: 'hidden-inset' }
const windowA = new BrowserWindow(optionsA)
// Replace with
const optionsB = { titleBarStyle: 'hiddenInset' }
const windowB = new BrowserWindow(optionsB)
```

### `menu`

```js
// Removed
menu.popup(browserWindow, 100, 200, 2)
// Replaced with
menu.popup(browserWindow, { x: 100, y: 200, positioningItem: 2 })
```

### `nativeImage`

```js
// Removed
nativeImage.toPng()
// Replaced with
nativeImage.toPNG()

// Removed
nativeImage.toJpeg()
// Replaced with
nativeImage.toJPEG()
```

### `process`

* `process.versions.electron` and `process.version.chrome` will be made
  read-only properties for consistency with the other `process.versions`
  properties set by Node.

### `webContents`

```js
// Removed
webContents.setZoomLevelLimits(1, 2)
// Replaced with
webContents.setVisualZoomLevelLimits(1, 2)
```

### `webFrame`

```js
// Removed
webFrame.setZoomLevelLimits(1, 2)
// Replaced with
webFrame.setVisualZoomLevelLimits(1, 2)
```

### `<webview>`

```js
// Removed
webview.setZoomLevelLimits(1, 2)
// Replaced with
webview.setVisualZoomLevelLimits(1, 2)
```

### Duplicate ARM Assets

Each Electron release includes two identical ARM builds with slightly different
filenames, like `electron-v1.7.3-linux-arm.zip` and
`electron-v1.7.3-linux-armv7l.zip`. The asset with the `v7l` prefix was added
to clarify to users which ARM version it supports, and to disambiguate it from
future armv6l and arm64 assets that may be produced.

The file _without the prefix_ is still being published to avoid breaking any
setups that may be consuming it. Starting at 2.0, the unprefixed file will
no longer be published.

For details, see
[6986](https://github.com/electron/electron/pull/6986)
and
[7189](https://github.com/electron/electron/pull/7189).



================================================
FILE: docs/experimental.md
================================================
# Experimental APIs

Some of Electron's APIs are tagged with `_Experimental_` in the documentation.
This tag indicates that the API may not be considered stable and the API may
be removed or modified more frequently than other APIs with less warning.

## Conditions for an API to be tagged as Experimental

Anyone can request an API be tagged as experimental in a feature PR, disagreements
on the experimental nature of a feature can be discussed in the API WG if they
can't be resolved in the PR.

## Process for removing the Experimental tag

Once an API has been stable and in at least two major stable release lines it
can be nominated to have its experimental tag removed.  This discussion should
happen at an API WG meeting.  Things to consider when discussing / nominating:

* The above "two major stables release lines" condition must have been met
* During that time no major bugs / issues should have been caused by the adoption of this feature
* The API is stable enough and hasn't been heavily impacted by Chromium upgrades
* Is anyone using the API?
* Is the API fulfilling the original proposed use cases, does it have any gaps?



================================================
FILE: docs/faq.md
================================================
# Electron FAQ

## Why am I having trouble installing Electron?

When running `npm install electron`, some users occasionally encounter
installation errors.

In almost all cases, these errors are the result of network problems and not
actual issues with the `electron` npm package. Errors like `ELIFECYCLE`,
`EAI_AGAIN`, `ECONNRESET`, and `ETIMEDOUT` are all indications of such
network problems. The best resolution is to try switching networks, or
wait a bit and try installing again.

You can also attempt to download Electron directly from
[electron/electron/releases](https://github.com/electron/electron/releases)
if installing via `npm` is failing.

## When will Electron upgrade to latest Chrome?

The Chrome version of Electron is usually bumped within one or two weeks after
a new stable Chrome version gets released. This estimate is not guaranteed and
depends on the amount of work involved with upgrading.

Only the stable channel of Chrome is used. If an important fix is in beta or dev
channel, we will back-port it.

For more information, please see the [security introduction](tutorial/security.md).

## When will Electron upgrade to latest Node.js?

When a new version of Node.js gets released, we usually wait for about a month
before upgrading the one in Electron. So we can avoid getting affected by bugs
introduced in new Node.js versions, which happens very often.

New features of Node.js are usually brought by V8 upgrades, since Electron is
using the V8 shipped by Chrome browser, the shiny new JavaScript feature of a
new Node.js version is usually already in Electron.

## How to share data between web pages?

To share data between web pages (the renderer processes) the simplest way is to
use HTML5 APIs which are already available in browsers. Good candidates are
[Storage API][storage], [`localStorage`][local-storage],
[`sessionStorage`][session-storage], and [IndexedDB][indexed-db].

Alternatively, you can use the IPC primitives that are provided by Electron. To
share data between the main and renderer processes, you can use the
[`ipcMain`](api/ipc-main.md) and [`ipcRenderer`](api/ipc-renderer.md) modules.
To communicate directly between web pages, you can send a
[`MessagePort`][message-port] from one to the other, possibly via the main process
using [`ipcRenderer.postMessage()`](api/ipc-renderer.md#ipcrendererpostmessagechannel-message-transfer).
Subsequent communication over message ports is direct and does not detour through
the main process.

## My app's tray disappeared after a few minutes.

This happens when the variable which is used to store the tray gets
garbage collected.

If you encounter this problem, the following articles may prove helpful:

* [Memory Management][memory-management]
* [Closures][closures]

If you want a quick fix, you can make the variables global by changing your
code from this:

```js
const { app, Tray } = require('electron')
app.whenReady().then(() => {
  const tray = new Tray('/path/to/icon.png')
  tray.setTitle('hello world')
})
```

to this:

```js
const { app, Tray } = require('electron')
let tray = null
app.whenReady().then(() => {
  tray = new Tray('/path/to/icon.png')
  tray.setTitle('hello world')
})
```

## I can not use jQuery/RequireJS/Meteor/AngularJS in Electron.

Due to the Node.js integration of Electron, there are some extra symbols
inserted into the DOM like `module`, `exports`, `require`. This causes problems
for some libraries since they want to insert the symbols with the same names.

To solve this, you can turn off node integration in Electron:

```js
// In the main process.
const { BrowserWindow } = require('electron')
const win = new BrowserWindow({
  webPreferences: {
    nodeIntegration: false
  }
})
win.show()
```

But if you want to keep the abilities of using Node.js and Electron APIs, you
have to rename the symbols in the page before including other libraries:

```html
<head>
<script>
window.nodeRequire = require;
delete window.require;
delete window.exports;
delete window.module;
</script>
<script type="text/javascript" src="jquery.js"></script>
</head>
```

## `require('electron').xxx` is undefined.

When using Electron's built-in module you might encounter an error like this:

```sh
> require('electron').webFrame.setZoomFactor(1.0)
Uncaught TypeError: Cannot read property 'setZoomLevel' of undefined
```

It is very likely you are using the module in the wrong process. For example
`electron.app` can only be used in the main process, while `electron.webFrame`
is only available in renderer processes.

## The font looks blurry, what is this and what can I do?

If [sub-pixel anti-aliasing](https://alienryderflex.com/sub_pixel/) is deactivated, then fonts on LCD screens can look blurry. Example:

![Subpixel rendering example](images/subpixel-rendering-screenshot.gif)

Sub-pixel anti-aliasing needs a non-transparent background of the layer containing the font glyphs. (See [this issue](https://github.com/electron/electron/issues/6344#issuecomment-420371918) for more info).

To achieve this goal, set the background in the constructor for [BrowserWindow][browser-window]:

```js
const { BrowserWindow } = require('electron')
const win = new BrowserWindow({
  backgroundColor: '#fff'
})
```

The effect is visible only on (some?) LCD screens. Even if you don't see a difference, some of your users may. It is best to always set the background this way, unless you have reasons not to do so.

Notice that just setting the background in the CSS does not have the desired effect.

[memory-management]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
[closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
[storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[session-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[indexed-db]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[message-port]: https://developer.mozilla.org/en-US/docs/Web/API/MessagePort
[browser-window]: api/browser-window.md



================================================
FILE: docs/glossary.md
================================================
# Glossary

This page defines some terminology that is commonly used in Electron development.

### ASAR

ASAR stands for Atom Shell Archive Format. An [asar][] archive is a simple
`tar`-like format that concatenates files into a single file. Electron can read
arbitrary files from it without unpacking the whole file.

The ASAR format was created primarily to improve performance on Windows when
reading large quantities of small files (e.g. when loading your app's JavaScript
dependency tree from `node_modules`).

### code signing

Code signing is a process where an app developer digitally signs their code to
ensure that it hasn't been tampered with after packaging. Both Windows and
macOS implement their own version of code signing. As a desktop app developer,
it's important that you sign your code if you plan on distributing it to the
general public.

For more information, read the [Code Signing][] tutorial.

### context isolation

Context isolation is a security measure in Electron that ensures that your
preload script cannot leak privileged Electron or Node.js APIs to the web
contents in your renderer process. With context isolation enabled, the
only way to expose APIs from your preload script is through the
`contextBridge` API.

For more information, read the [Context Isolation][] tutorial.

See also: [preload script](#preload-script), [renderer process](#renderer-process)

### CRT

The C Runtime Library (CRT) is the part of the C++ Standard Library that
incorporates the ISO C99 standard library. The Visual C++ libraries that
implement the CRT support native code development, and both mixed native and
managed code, and pure managed code for .NET development.

### DMG

An Apple Disk Image is a packaging format used by macOS. DMG files are
commonly used for distributing application "installers".

### IME

Input Method Editor. A program that allows users to enter characters and
symbols not found on their keyboard. For example, this allows users of Latin
keyboards to input Chinese, Japanese, Korean and Indic characters.

### IDL

Interface description language. Write function signatures and data types in a
format that can be used to generate interfaces in Java, C++, JavaScript, etc.

### IPC

IPC stands for inter-process communication. Electron uses IPC to send
serialized JSON messages between the main and renderer processes.

see also: [main process](#main-process), [renderer process](#renderer-process)

### main process

The main process, commonly a file named `main.js`, is the entry point to every
Electron app. It controls the life of the app, from open to close. It also
manages native elements such as the Menu, Menu Bar, Dock, Tray, etc. The
main process is responsible for creating each new renderer process in the app.
The full Node API is built in.

Every app's main process file is specified in the `main` property in
`package.json`. This is how `electron .` knows what file to execute at startup.

In Chromium, this process is referred to as the "browser process". It is
renamed in Electron to avoid confusion with renderer processes.

See also: [process](#process), [renderer process](#renderer-process)

### MAS

Acronym for Apple's Mac App Store. For details on submitting your app to the
MAS, see the [Mac App Store Submission Guide][].

### Mojo

An IPC system for communicating intra- or inter-process, and that's important
because Chrome is keen on being able to split its work into separate processes
or not, depending on memory pressures etc.

See https://chromium.googlesource.com/chromium/src/+/main/mojo/README.md

See also: [IPC](#ipc)

### MSI

On Windows, MSI packages are used by the Windows Installer
(also known as Microsoft Installer) service to install and configure
applications.

More information can be found in [Microsoft's documentation][msi].

### native modules

Native modules (also called [addons][] in
Node.js) are modules written in C or C++ that can be loaded into Node.js or
Electron using the require() function, and used as if they were an
ordinary Node.js module. They are used primarily to provide an interface
between JavaScript running in Node.js and C/C++ libraries.

Native Node modules are supported by Electron, but since Electron is very
likely to use a different V8 version from the Node binary installed in your
system, you have to manually specify the location of Electron’s headers when
building native modules.

For more information, read the [Native Node Modules][] tutorial.

### notarization

Notarization is a macOS-specific process where a developer can send a
code-signed app to Apple servers to get verified for malicious
components through an automated service.

See also: [code signing](#code-signing)

### OSR

OSR (offscreen rendering) can be used for loading heavy page in
background and then displaying it after (it will be much faster).
It allows you to render page without showing it on screen.

For more information, read the [Offscreen Rendering][] tutorial.

### preload script

Preload scripts contain code that executes in a renderer process
before its web contents begin loading. These scripts run within
the renderer context, but are granted more privileges by having
access to Node.js APIs.

See also: [renderer process](#renderer-process), [context isolation](#context-isolation)

### process

A process is an instance of a computer program that is being executed. Electron
apps that make use of the [main][] and one or many [renderer][] process are
actually running several programs simultaneously.

In Node.js and Electron, each running process has a `process` object. This
object is a global that provides information about, and control over, the
current process. As a global, it is always available to applications without
using require().

See also: [main process](#main-process), [renderer process](#renderer-process)

### renderer process

The renderer process is a browser window in your app. Unlike the main process,
there can be multiple of these and each is run in a separate process.
They can also be hidden.

See also: [process](#process), [main process](#main-process)

### sandbox

The sandbox is a security feature inherited from Chromium that restricts
your renderer processes to a limited set of permissions.

For more information, read the [Process Sandboxing][] tutorial.

See also: [process](#process)

### Squirrel

Squirrel is an open-source framework that enables Electron apps to update
automatically as new versions are released. See the [autoUpdater][] API for
info about getting started with Squirrel.

### userland

This term originated in the Unix community, where "userland" or "userspace"
referred to programs that run outside of the operating system kernel. More
recently, the term has been popularized in the Node and npm community to
distinguish between the features available in "Node core" versus packages
published to the npm registry by the much larger "user" community.

Like Node, Electron is focused on having a small set of APIs that provide
all the necessary primitives for developing multi-platform desktop applications.
This design philosophy allows Electron to remain a flexible tool without being
overly prescriptive about how it should be used. Userland enables users to
create and share tools that provide additional functionality on top of what is
available in "core".

### utility process

The utility process is a child of the main process that allows running any
untrusted services that cannot be run in the main process. Chromium uses this
process to perform network I/O, audio/video processing, device inputs etc.
In Electron, you can create this process using [UtilityProcess][] API.

See also: [process](#process), [main process](#main-process)

### V8

V8 is Google's open source JavaScript engine. It is written in C++ and is
used in Google Chrome. V8 can run standalone, or can be embedded into any C++ application.

Electron builds V8 as part of Chromium and then points Node to that V8 when
building it.

V8's version numbers always correspond to those of Google Chrome. Chrome 59
includes V8 5.9, Chrome 58 includes V8 5.8, etc.

- [v8.dev](https://v8.dev/)
- [nodejs.org/api/v8.html](https://nodejs.org/api/v8.html)
- [docs/development/v8-development.md](development/v8-development.md)

### webview

`webview` tags are used to embed 'guest' content (such as external web pages) in
your Electron app. They are similar to `iframe`s, but differ in that each
webview runs in a separate process. It doesn't have the same
permissions as your web page and all interactions between your app and
embedded content will be asynchronous. This keeps your app safe from the
embedded content.

[addons]: https://nodejs.org/api/addons.html
[asar]: https://github.com/electron/asar
[autoupdater]: api/auto-updater.md
[code signing]: tutorial/code-signing.md
[context isolation]: tutorial/context-isolation.md
[mac app store submission guide]: tutorial/mac-app-store-submission-guide.md
[main]: #main-process
[msi]: https://learn.microsoft.com/en-us/windows/win32/msi/windows-installer-portal
[Native Node Modules]: tutorial/using-native-node-modules.md
[offscreen rendering]: tutorial/offscreen-rendering.md
[process sandboxing]: tutorial/sandbox.md
[renderer]: #renderer-process
[UtilityProcess]: api/utility-process.md



================================================
FILE: docs/why-electron.md
================================================
# Why Electron

Electron is a framework enabling developers to build cross-platform desktop applications for macOS, Windows, and Linux by combining web technologies (HTML, JavaScript, CSS) with Node.js and native code. It is open-source, MIT-licensed, and free for both commercial and personal use. In this document, we’ll explain why companies and developers choose Electron.

We can split up the benefits of Electron in two questions: First, why should you use web technologies to build your application? Then, why should you choose Electron as the framework to do so?

If you’re already using web technologies for your application, you can skip straight to the `Why Electron?` section below.

## Why choose web technologies

Web technologies include HTML, CSS, JavaScript, and WebAssembly. They’re the storefront of the modern Internet. Those technologies have emerged as the best choice for building user interfaces — both for consumer applications as well as mission-critical business applications. This is true both for applications that need to run in a browser as well as desktop applications that are not accessible from a browser. Our bold claim here is that this isn’t just true for cross-platform applications that need to run on multiple operating systems but true overall.

As an example, NASA’s actual [Mission Control](https://github.com/nasa/openmct) is written with web technologies. The [Bloomberg Terminal](https://en.wikipedia.org/wiki/Bloomberg_Terminal), the computer system found at every financial institution, is written with web technologies and runs inside Chromium. It costs $25,000 per user, per year. The McDonald’s ordering kiosk, powering the world’s biggest food retailer, is entirely built with Chromium. The [SpaceX’s Dragon 2 space capsule](https://old.reddit.com/r/spacex/comments/gxb7j1/we_are_the_spacex_software_team_ask_us_anything/ft62781/?context=3) uses Chromium to display its interface. You get the point: web technologies are a great tech stack to build user interfaces.

Here are the reasons we, the Electron maintainers, are betting on the web.

### Versatility

Modern versions of HTML and CSS enable your developers and designers to fully express themselves. The web’s showcase includes Google Earth, Netflix, Spotify, Gmail, Facebook, Airbnb, or GitHub. Whatever interface your application needs, you will be able to express it with HTML, CSS, and JavaScript.

If you want to focus on building a great product without figuring out how you can realize your designer’s vision in a specific UI framework, the web is a safe bet.

### Reliability

Web technologies are the most-used foundation for user interfaces on the planet. They have been hardened accordingly. Modern computers have been optimized from the CPU to the operating system to be good at running web technologies. The manufacturers of your user’s devices—be that an Android phone or the latest MacBook—will ensure that they can visit websites, play videos on YouTube, or display emails. In turn, they’ll also ensure that your app has a stable foundation, even if you have just one user.

If you want to focus on building a great product without debugging a weird quirk that nobody has found before, the web is a safe bet.

### Interoperability

Whatever provider or customer data you need to interact with, they will have probably thought of an integration path with the web. Depending on your technology choice, embedding a YouTube video either takes 30 seconds or requires you to hire a team devoted to streaming and hardware-accelerated video decoding. In the case of YouTube, using anything other than the provided players is actually against their terms and conditions, so you’ll likely embed a browser frame before you implement your own video streaming decoder.

There will be virtually no platform where your app cannot run if you build it with web technologies. Virtually all devices with a display—be that an ATM, a car infotainment system, a smart TV, a fridge, or a Nintendo Switch—come with means to display web technologies. The web is safe bet if you want to be cross-platform.

### Ubiquity

It’s easy to find developers with experience building with web technologies. If you’re a developer, it’ll be easy to find answers to your questions on Google, Stack Overflow, GitHub, or a coding AI of your choice. Whatever problem you need to solve, it’s likely that somebody has solved it well before—and that you can find the answer to the puzzle online.

If you want to focus on building a great product with ample access to resources and materials, the web is a safe bet.

## Why choose Electron

Electron combines Chromium, Node.js, and the ability to write custom native code into one framework for building powerful desktop applications. There are three main reasons to use Electron:

### Enterprise-grade

Electron is reliable, secure, stable, and mature. It is the premier choice for companies building their flagship product. We have a list of some of those companies on our homepage, but just among chat apps, Slack, Discord, and Skype are built with Electron. Among AI applications, both OpenAI’s ChatGPT and Anthropic’s Claude use Electron. Visual Studio Code, Loom, Canva, Notion, Docker, and countless other leading developers of software bet on Electron.

We did make it a priority to make Electron easy to work with and a delight for developers. That’s likely the main reason why Electron became as popular as it is today — but what keeps Electron alive and thriving is the maintainer’s focus on making Electron as stable, secure, performant, and capable of mission-critical use cases for end users as possible. We’re building an Electron that is ready to be used in scenarios where unfixable bugs, unpatched security holes, and outages of any kind are worst-case scenarios.

### Mature

Our current estimation is that most desktop computers on the planet run at least one Electron app. Electron has grown by prioritizing talent in its maintainer group, fostering excellent and sustainable engineering practices in managing the ongoing maintenance, and proactively inviting companies betting on Electron to directly contribute to the project. We’re an impact project with the OpenJS foundation, which is itself a part of the Linux foundation. We share resources and expertise with other foundation projects like Node.js, ESLint, Webpack - or the Linux Kernel or Kubernetes.

What does all of that mean for you, a developer, in practice?

- **Reliable release schedule**: Electron will release a new major version in lockstep with every second major Chromium release, usually on the same day as Chromium. A lot of work, both in the form of building processes and tools, but also in terms of raw invested hours every week, has to go into making that happen.
- **No dictators**: Sometimes, betting on a technology also requires you to bet on a single person or company. In turn, it requires you to trust that the person or company never has a breakdown, starts fighting you directly, or does anything else drastic that’ll force you rethink your entire tech stack. Electron is maintained by a diverse set of companies (Microsoft, Slack/Salesforce, Notion, and more) and will continue to welcome more companies interested in ensuring their “seat at the decision-making table”.

### Stability, security, performance

Electron delivers the best experience on all target platforms (macOS, Windows, Linux) by bundling the latest version of Chromium, V8, and Node.js directly with the application binary. When it comes to running and rendering web content with upmost stability, security, and performance, we currently believe that stack to be “best in class”.

#### Why bundle anything at all

You might wonder why we bundle Chromium’s web stack with our apps when most modern operating systems already ship a browser and some form of web view. Bundling doesn’t just increase the amount of work for Electron maintainers dramatically, it also increases the total disk size of Electron apps (most apps are >100MB). Many Electron maintainers once developed applications that did make use of embedded web views — and have since accepted the increased disk size and maintainer work as a worthy trade-off.

When using an operating system's built-in web view, you're limited by the browser version included in the oldest operating system version you need to support. We have found the following problems with this approach:

- **Stability**: The modern web technology stack is complex, and as a result, you’ll sooner or later encounter bugs. If you use the operating system’s web view, your only recourse will be to ask your customers to upgrade their operating system. If no upgrade is available for that machine (because of no ability to upgrade to the latest macOS or Windows 11), you’ll have to ask them to buy a new computer. If you’re unlucky, you’re now losing a major customer because they will not upgrade their entire fleet of thousands of machines just because one team wanted to try your startup’s app. You have _no recourse_ in this situation. Even the risk of that happening is unacceptable to the companies that employ the Electron maintainers.
- **Security:** Similar to how you can fix stability bugs by releasing an app update, you can also release security fixes to your application without asking your customer to upgrade their operating system. Even if operating system providers prioritize updates to their built-in browser, we have not seen them reliably update the built-in web views with similar urgency. Bundling a web renderer gives you, the developer, control.
- **Performance:** For simple HTML documents, a built-in web view will sometimes use fewer resources than an app with a bundled framework. For bigger apps, it is our experience that we can deliver better performance with the latest version of Chromium than we can with built-in web views. You might think that the built-in view can share a lot of resources with other apps and the operating system— but for security reasons, apps have to run in their own sandboxes, isolated from each other. At that point, the question is whether the OS’ web view is more performant than Chromium. Across many apps, our experience is that bundling Chromium and Node.js enables us to build better and more performant experiences.

#### Why bundle Chromium and Node.js

Electron aims to enable the apps it supports to deliver the best possible user experience, followed by the best possible developer experience. Chromium is currently the best cross-platform rendering stack available. Node.js uses Chromium’s JavaScript engine V8, allowing us to combine the powers of both.

- **Native code when you want it**: Thanks to Node.js’ mature native addon system, you can always write native code. There is no system API out of reach for you. Whatever macOS, Windows, or Linux feature you’ll want to integrate with —as long as you can do it in C, C++, Objective-C, Rust, or another native language, you’ll be able to do it in Electron. Again, this gives you, the developer, maximum control. With Electron, you can use web technologies without choosing _only_ web technologies.

### Developer experience

To summarize, we aim to build an Electron that is mature, enterprise-grade, and ready for mission-critical applications. We prioritize reliability, stability, security, and performance. That said, you might also choose Electron for its developer experience:

- **Powerful ecosystem**: Anything you find on npm will run inside Electron. Any resource available to you about how to work with Node.js also applies to Electron. In addition, Electron itself has a [thriving ecosystem](https://www.npmjs.com/search?q=electron) — including plenty of choices for installers, updaters, deeper operating system-integration, and more.
- **Plenty of built-in capabilities:** Over the last ten years, Electron’s core has gained plenty of native capabilities that you might need to build your application. Written in C++ and Objective-C, Electron has [dozens of easy-to-use APIs for deeper operating-system integration](https://www.electronjs.org/docs/latest/api/app) — like advanced window customization for transparent or oddly shaped widgets, receiving push notifications from the Apple Push Notification Network, or handling a custom URL protocol for your app.
- **Open source**: The entire stack is open source and open to your inspection. This ensures your freedom to add any feature or fix any bug you might encounter in the future.
- **Native code when you need it:** It bears repeating that Electron allows you to mix and match web technologies and C++, C, Objective-C, Rust, and other native languages. Whether it be SQLite, a whole LLM, or just the ability to call one specific native API, Electron will make it easy.

---

## Why choose something else

As outlined above, the web is an amazing platform for building interfaces. That doesn’t mean that we, the maintainers, would build _everything_ with HTML and CSS. Here are some notable exceptions:

**Resource-Constrained Environments and IoT:** In scenarios with very limited memory or processing power (say, one megabyte of memory and 100MHz of processing power on a low-powered ARM Cortex-M), you will likely need to use a low-level language to directly talk to the display to output basic text and images. Even on slightly higher-powered single-chip devices you might want to consider an embedded UI framework. A classic example is a smart watch.

**Small Disk Footprint**: Zipped Electron apps are usually around 80 to 100 Megabytes. If a smaller disk footprint is a hard requirement, you’ll have to use something else.

**Operating System UI Frameworks and Libraries**: By allowing you to write native code, Electron can do anything a native application can do, including the use of the operating system’s UI components, like WinUI, SwiftUI, or AppKit. In practice, most Electron apps make rare use of that ability. If you want the majority of your app to be built with operating system-provided interface components, you’ll likely be better off building fully native apps for each operating system you’d like to target. It’s not that it’s impossible with Electron, it’ll just likely be an overall easier development process.

**Games and Real-Time Graphics:** If you're building a high-performance game or application requiring complex real-time 3D graphics, native frameworks like Unity, Unreal Engine, or DirectX/OpenGL will provide better performance and more direct access to graphics hardware. Web fans might point out caveats, like the fact that even Unreal Engine ships with Chromium — or that WebGPU and WebGL are developing rapidly and many game engines, including the ones listed here, can now output their games in a format that runs in a browser. That said, if you asked us to build the next AAA game, we’d likely use something else than just web technologies.

**Embedding Lightweight Websites**: Electron apps typically are mostly web apps with native code sprinkled in where useful. Processing-heavy Electron applications tend to write the UI in HTML/CSS and build the backend in Rust, C++, or another native language. If you’re planning to build a primarily native application that also wants to display a little website in a specific view, you might be better off using the OS-provided web view or something like [ultralight](https://ultralig.ht/).



================================================
FILE: docs/api/accelerator.md
================================================
# Accelerator

> Define keyboard shortcuts.

Accelerators are strings that can contain multiple modifiers and a single key code,
combined by the `+` character, and are used to define keyboard shortcuts
throughout your application. Accelerators are case insensitive.

Examples:

* `CommandOrControl+A`
* `CommandOrControl+Shift+Z`

Shortcuts are registered with the [`globalShortcut`](global-shortcut.md) module
using the [`register`](global-shortcut.md#globalshortcutregisteraccelerator-callback)
method, i.e.

```js
const { app, globalShortcut } = require('electron')

app.whenReady().then(() => {
  // Register a 'CommandOrControl+Y' shortcut listener.
  globalShortcut.register('CommandOrControl+Y', () => {
    // Do stuff when Y and either Command/Control is pressed.
  })
})
```

## Platform notice

On Linux and Windows, the `Command` key does not have any effect so
use `CommandOrControl` which represents `Command` on macOS and `Control` on
Linux and Windows to define some accelerators.

Use `Alt` instead of `Option`. The `Option` key only exists on macOS, whereas
the `Alt` key is available on all platforms.

The `Super` (or `Meta`) key is mapped to the `Windows` key on Windows and Linux and
`Cmd` on macOS.

## Available modifiers

* `Command` (or `Cmd` for short)
* `Control` (or `Ctrl` for short)
* `CommandOrControl` (or `CmdOrCtrl` for short)
* `Alt`
* `Option`
* `AltGr`
* `Shift`
* `Super`
* `Meta`

## Available key codes

* `0` to `9`
* `A` to `Z`
* `F1` to `F24`
* Various Punctuation: `)`, `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `:`, `;`, `:`, `+`, `=`, `<`, `,`, `_`, `-`, `>`, `.`, `?`, `/`, `~`, `` ` ``, `{`, `]`, `[`, `|`, `\`, `}`, `"`
* `Plus`
* `Space`
* `Tab`
* `Capslock`
* `Numlock`
* `Scrolllock`
* `Backspace`
* `Delete`
* `Insert`
* `Return` (or `Enter` as alias)
* `Up`, `Down`, `Left` and `Right`
* `Home` and `End`
* `PageUp` and `PageDown`
* `Escape` (or `Esc` for short)
* `VolumeUp`, `VolumeDown` and `VolumeMute`
* `MediaNextTrack`, `MediaPreviousTrack`, `MediaStop` and `MediaPlayPause`
* `PrintScreen`
* NumPad Keys
  * `num0` - `num9`
  * `numdec` - decimal key
  * `numadd` - numpad `+` key
  * `numsub` - numpad `-` key
  * `nummult` - numpad `*` key
  * `numdiv` - numpad `÷` key



================================================
FILE: docs/api/app.md
================================================
# app

> Control your application's event lifecycle.

Process: [Main](../glossary.md#main-process)

The following example shows how to quit the application when the last window is
closed:

```js
const { app } = require('electron')
app.on('window-all-closed', () => {
  app.quit()
})
```

## Events

The `app` object emits the following events:

### Event: 'will-finish-launching'

Emitted when the application has finished basic startup. On Windows and Linux,
the `will-finish-launching` event is the same as the `ready` event; on macOS,
this event represents the `applicationWillFinishLaunching` notification of
`NSApplication`.

In most cases, you should do everything in the `ready` event handler.

### Event: 'ready'

Returns:

* `event` Event
* `launchInfo` Record\<string, any\> | [NotificationResponse](structures/notification-response.md) _macOS_

Emitted once, when Electron has finished initializing. On macOS, `launchInfo`
holds the `userInfo` of the [`NSUserNotification`](https://developer.apple.com/documentation/foundation/nsusernotification)
or information from [`UNNotificationResponse`](https://developer.apple.com/documentation/usernotifications/unnotificationresponse)
that was used to open the application, if it was launched from Notification Center.
You can also call `app.isReady()` to check if this event has already fired and `app.whenReady()`
to get a Promise that is fulfilled when Electron is initialized.

**Note**: The `ready` event is only fired after the main process has finished running the first
tick of the event loop. If an Electron API needs to be called before the `ready` event, ensure
that it is called synchronously in the top-level context of the main process.

### Event: 'window-all-closed'

Emitted when all windows have been closed.

If you do not subscribe to this event and all windows are closed, the default
behavior is to quit the app; however, if you subscribe, you control whether the
app quits or not. If the user pressed `Cmd + Q`, or the developer called
`app.quit()`, Electron will first try to close all the windows and then emit the
`will-quit` event, and in this case the `window-all-closed` event would not be
emitted.

### Event: 'before-quit'

Returns:

* `event` Event

Emitted before the application starts closing its windows.
Calling `event.preventDefault()` will prevent the default behavior, which is
terminating the application.

**Note:** If application quit was initiated by `autoUpdater.quitAndInstall()`,
then `before-quit` is emitted _after_ emitting `close` event on all windows and
closing them.

**Note:** On Windows, this event will not be emitted if the app is closed due
to a shutdown/restart of the system or a user logout.

### Event: 'will-quit'

Returns:

* `event` Event

Emitted when all windows have been closed and the application will quit.
Calling `event.preventDefault()` will prevent the default behavior, which is
terminating the application.

See the description of the `window-all-closed` event for the differences between
the `will-quit` and `window-all-closed` events.

**Note:** On Windows, this event will not be emitted if the app is closed due
to a shutdown/restart of the system or a user logout.

### Event: 'quit'

Returns:

* `event` Event
* `exitCode` Integer

Emitted when the application is quitting.

**Note:** On Windows, this event will not be emitted if the app is closed due
to a shutdown/restart of the system or a user logout.

### Event: 'open-file' _macOS_

Returns:

* `event` Event
* `path` string

Emitted when the user wants to open a file with the application. The `open-file`
event is usually emitted when the application is already open and the OS wants
to reuse the application to open the file. `open-file` is also emitted when a
file is dropped onto the dock and the application is not yet running. Make sure
to listen for the `open-file` event very early in your application startup to
handle this case (even before the `ready` event is emitted).

You should call `event.preventDefault()` if you want to handle this event.

On Windows, you have to parse `process.argv` (in the main process) to get the
filepath.

### Event: 'open-url' _macOS_

Returns:

* `event` Event
* `url` string

Emitted when the user wants to open a URL with the application. Your application's
`Info.plist` file must define the URL scheme within the `CFBundleURLTypes` key, and
set `NSPrincipalClass` to `AtomApplication`.

As with the `open-file` event, be sure to register a listener for the `open-url`
event early in your application startup to detect if the application is being opened to handle a URL.
If you register the listener in response to a `ready` event, you'll miss URLs that trigger the launch of your application.

### Event: 'activate' _macOS_

Returns:

* `event` Event
* `hasVisibleWindows` boolean

Emitted when the application is activated. Various actions can trigger
this event, such as launching the application for the first time, attempting
to re-launch the application when it's already running, or clicking on the
application's dock or taskbar icon.

### Event: 'did-become-active' _macOS_

Returns:

* `event` Event

Emitted when the application becomes active. This differs from the `activate` event in
that `did-become-active` is emitted every time the app becomes active, not only
when Dock icon is clicked or application is re-launched. It is also emitted when a user
switches to the app via the macOS App Switcher.

### Event: 'did-resign-active' _macOS_

Returns:

* `event` Event

Emitted when the app is no longer active and doesn’t have focus. This can be triggered,
for example, by clicking on another application or by using the macOS App Switcher to
switch to another application.

### Event: 'continue-activity' _macOS_

Returns:

* `event` Event
* `type` string - A string identifying the activity. Maps to
  [`NSUserActivity.activityType`][activity-type].
* `userInfo` unknown - Contains app-specific state stored by the activity on
  another device.
* `details` Object
  * `webpageURL` string (optional) - A string identifying the URL of the webpage accessed by the activity on another device, if available.

Emitted during [Handoff][handoff] when an activity from a different device wants
to be resumed. You should call `event.preventDefault()` if you want to handle
this event.

A user activity can be continued only in an app that has the same developer Team
ID as the activity's source app and that supports the activity's type.
Supported activity types are specified in the app's `Info.plist` under the
`NSUserActivityTypes` key.

### Event: 'will-continue-activity' _macOS_

Returns:

* `event` Event
* `type` string - A string identifying the activity. Maps to
  [`NSUserActivity.activityType`][activity-type].

Emitted during [Handoff][handoff] before an activity from a different device wants
to be resumed. You should call `event.preventDefault()` if you want to handle
this event.

### Event: 'continue-activity-error' _macOS_

Returns:

* `event` Event
* `type` string - A string identifying the activity. Maps to
  [`NSUserActivity.activityType`][activity-type].
* `error` string - A string with the error's localized description.

Emitted during [Handoff][handoff] when an activity from a different device
fails to be resumed.

### Event: 'activity-was-continued' _macOS_

Returns:

* `event` Event
* `type` string - A string identifying the activity. Maps to
  [`NSUserActivity.activityType`][activity-type].
* `userInfo` unknown - Contains app-specific state stored by the activity.

Emitted during [Handoff][handoff] after an activity from this device was successfully
resumed on another one.

### Event: 'update-activity-state' _macOS_

Returns:

* `event` Event
* `type` string - A string identifying the activity. Maps to
  [`NSUserActivity.activityType`][activity-type].
* `userInfo` unknown - Contains app-specific state stored by the activity.

Emitted when [Handoff][handoff] is about to be resumed on another device. If you need to update the state to be transferred, you should call `event.preventDefault()` immediately, construct a new `userInfo` dictionary and call `app.updateCurrentActivity()` in a timely manner. Otherwise, the operation will fail and `continue-activity-error` will be called.

### Event: 'new-window-for-tab' _macOS_

Returns:

* `event` Event

Emitted when the user clicks the native macOS new tab button. The new
tab button is only visible if the current `BrowserWindow` has a
`tabbingIdentifier`

### Event: 'browser-window-blur'

Returns:

* `event` Event
* `window` [BrowserWindow](browser-window.md)

Emitted when a [browserWindow](browser-window.md) gets blurred.

### Event: 'browser-window-focus'

Returns:

* `event` Event
* `window` [BrowserWindow](browser-window.md)

Emitted when a [browserWindow](browser-window.md) gets focused.

### Event: 'browser-window-created'

Returns:

* `event` Event
* `window` [BrowserWindow](browser-window.md)

Emitted when a new [browserWindow](browser-window.md) is created.

### Event: 'web-contents-created'

Returns:

* `event` Event
* `webContents` [WebContents](web-contents.md)

Emitted when a new [webContents](web-contents.md) is created.

### Event: 'certificate-error'

Returns:

* `event` Event
* `webContents` [WebContents](web-contents.md)
* `url` string
* `error` string - The error code
* `certificate` [Certificate](structures/certificate.md)
* `callback` Function
  * `isTrusted` boolean - Whether to consider the certificate as trusted
* `isMainFrame` boolean

Emitted when failed to verify the `certificate` for `url`, to trust the
certificate you should prevent the default behavior with
`event.preventDefault()` and call `callback(true)`.

```js
const { app } = require('electron')

app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  if (url === 'https://github.com') {
    // Verification logic.
    event.preventDefault()
    callback(true)
  } else {
    callback(false)
  }
})
```

### Event: 'select-client-certificate'

Returns:

* `event` Event
* `webContents` [WebContents](web-contents.md)
* `url` URL
* `certificateList` [Certificate[]](structures/certificate.md)
* `callback` Function
  * `certificate` [Certificate](structures/certificate.md) (optional)

Emitted when a client certificate is requested.

The `url` corresponds to the navigation entry requesting the client certificate
and `callback` can be called with an entry filtered from the list. Using
`event.preventDefault()` prevents the application from using the first
certificate from the store.

```js
const { app } = require('electron')

app.on('select-client-certificate', (event, webContents, url, list, callback) => {
  event.preventDefault()
  callback(list[0])
})
```

### Event: 'login'

Returns:

* `event` Event
* `webContents` [WebContents](web-contents.md) (optional)
* `authenticationResponseDetails` Object
  * `url` URL
  * `pid` number
* `authInfo` Object
  * `isProxy` boolean
  * `scheme` string
  * `host` string
  * `port` Integer
  * `realm` string
* `callback` Function
  * `username` string (optional)
  * `password` string (optional)

Emitted when `webContents` or [Utility process](../glossary.md#utility-process) wants to do basic auth.

The default behavior is to cancel all authentications. To override this you
should prevent the default behavior with `event.preventDefault()` and call
`callback(username, password)` with the credentials.

```js
const { app } = require('electron')

app.on('login', (event, webContents, details, authInfo, callback) => {
  event.preventDefault()
  callback('username', 'secret')
})
```

If `callback` is called without a username or password, the authentication
request will be cancelled and the authentication error will be returned to the
page.

### Event: 'gpu-info-update'

Emitted whenever there is a GPU info update.

### Event: 'render-process-gone'

Returns:

* `event` Event
* `webContents` [WebContents](web-contents.md)
* `details` [RenderProcessGoneDetails](structures/render-process-gone-details.md)

Emitted when the renderer process unexpectedly disappears.  This is normally
because it was crashed or killed.

### Event: 'child-process-gone'

Returns:

* `event` Event
* `details` Object
  * `type` string - Process type. One of the following values:
    * `Utility`
    * `Zygote`
    * `Sandbox helper`
    * `GPU`
    * `Pepper Plugin`
    * `Pepper Plugin Broker`
    * `Unknown`
  * `reason` string - The reason the child process is gone. Possible values:
    * `clean-exit` - Process exited with an exit code of zero
    * `abnormal-exit` - Process exited with a non-zero exit code
    * `killed` - Process was sent a SIGTERM or otherwise killed externally
    * `crashed` - Process crashed
    * `oom` - Process ran out of memory
    * `launch-failed` - Process never successfully launched
    * `integrity-failure` - Windows code integrity checks failed
  * `exitCode` number - The exit code for the process
      (e.g. status from waitpid if on POSIX, from GetExitCodeProcess on Windows).
  * `serviceName` string (optional) - The non-localized name of the process.
  * `name` string (optional) - The name of the process.
    Examples for utility: `Audio Service`, `Content Decryption Module Service`, `Network Service`, `Video Capture`, etc.

Emitted when the child process unexpectedly disappears. This is normally
because it was crashed or killed. It does not include renderer processes.

### Event: 'accessibility-support-changed' _macOS_ _Windows_

Returns:

* `event` Event
* `accessibilitySupportEnabled` boolean - `true` when Chrome's accessibility
  support is enabled, `false` otherwise.

Emitted when Chrome's accessibility support changes. This event fires when
assistive technologies, such as screen readers, are enabled or disabled.
See https://www.chromium.org/developers/design-documents/accessibility for more
details.

### Event: 'session-created'

Returns:

* `session` [Session](session.md)

Emitted when Electron has created a new `session`.

```js
const { app } = require('electron')

app.on('session-created', (session) => {
  console.log(session)
})
```

### Event: 'second-instance'

Returns:

* `event` Event
* `argv` string[] - An array of the second instance's command line arguments
* `workingDirectory` string - The second instance's working directory
* `additionalData` unknown - A JSON object of additional data passed from the second instance

This event will be emitted inside the primary instance of your application
when a second instance has been executed and calls `app.requestSingleInstanceLock()`.

`argv` is an Array of the second instance's command line arguments,
and `workingDirectory` is its current working directory. Usually
applications respond to this by making their primary window focused and
non-minimized.

**Note:** `argv` will not be exactly the same list of arguments as those passed
to the second instance. The order might change and additional arguments might be appended.
If you need to maintain the exact same arguments, it's advised to use `additionalData` instead.

**Note:** If the second instance is started by a different user than the first, the `argv` array will not include the arguments.

This event is guaranteed to be emitted after the `ready` event of `app`
gets emitted.

**Note:** Extra command line arguments might be added by Chromium,
such as `--original-process-start-time`.

## Methods

The `app` object has the following methods:

**Note:** Some methods are only available on specific operating systems and are
labeled as such.

### `app.quit()`

Try to close all windows. The `before-quit` event will be emitted first. If all
windows are successfully closed, the `will-quit` event will be emitted and by
default the application will terminate.

This method guarantees that all `beforeunload` and `unload` event handlers are
correctly executed. It is possible that a window cancels the quitting by
returning `false` in the `beforeunload` event handler.

### `app.exit([exitCode])`

* `exitCode` Integer (optional)

Exits immediately with `exitCode`. `exitCode` defaults to 0.

All windows will be closed immediately without asking the user, and the `before-quit`
and `will-quit` events will not be emitted.

### `app.relaunch([options])`

* `options` Object (optional)
  * `args` string[] (optional)
  * `execPath` string (optional)

Relaunches the app when the current instance exits.

By default, the new instance will use the same working directory and command line
arguments as the current instance. When `args` is specified, the `args` will be
passed as the command line arguments instead. When `execPath` is specified, the
`execPath` will be executed for the relaunch instead of the current app.

Note that this method does not quit the app when executed. You have to call
`app.quit` or `app.exit` after calling `app.relaunch` to make the app restart.

When `app.relaunch` is called multiple times, multiple instances will be
started after the current instance exits.

An example of restarting the current instance immediately and adding a new command
line argument to the new instance:

```js
const { app } = require('electron')

app.relaunch({ args: process.argv.slice(1).concat(['--relaunch']) })
app.exit(0)
```

### `app.isReady()`

Returns `boolean` - `true` if Electron has finished initializing, `false` otherwise.
See also `app.whenReady()`.

### `app.whenReady()`

Returns `Promise<void>` - fulfilled when Electron is initialized.
May be used as a convenient alternative to checking `app.isReady()`
and subscribing to the `ready` event if the app is not ready yet.

### `app.focus([options])`

* `options` Object (optional)
  * `steal` boolean _macOS_ - Make the receiver the active app even if another app is
  currently active.

On Linux, focuses on the first visible window. On macOS, makes the application
the active app. On Windows, focuses on the application's first window.

You should seek to use the `steal` option as sparingly as possible.

### `app.hide()` _macOS_

Hides all application windows without minimizing them.

### `app.isHidden()` _macOS_

Returns `boolean` - `true` if the application—including all of its windows—is hidden (e.g. with `Command-H`), `false` otherwise.

### `app.show()` _macOS_

Shows application windows after they were hidden. Does not automatically focus
them.

### `app.setAppLogsPath([path])`

* `path` string (optional) - A custom path for your logs. Must be absolute.

Sets or creates a directory your app's logs which can then be manipulated with `app.getPath()` or `app.setPath(pathName, newPath)`.

Calling `app.setAppLogsPath()` without a `path` parameter will result in this directory being set to `~/Library/Logs/YourAppName` on _macOS_, and inside the `userData` directory on _Linux_ and _Windows_.

### `app.getAppPath()`

Returns `string` - The current application directory.

### `app.getPath(name)`

* `name` string - You can request the following paths by the name:
  * `home` User's home directory.
  * `appData` Per-user application data directory, which by default points to:
    * `%APPDATA%` on Windows
    * `$XDG_CONFIG_HOME` or `~/.config` on Linux
    * `~/Library/Application Support` on macOS
  * `userData` The directory for storing your app's configuration files, which
    by default is the `appData` directory appended with your app's name. By
    convention files storing user data should be written to this directory, and
    it is not recommended to write large files here because some environments
    may backup this directory to cloud storage.
  * `sessionData` The directory for storing data generated by `Session`, such
    as localStorage, cookies, disk cache, downloaded dictionaries, network
    state, devtools files. By default this points to `userData`. Chromium may
    write very large disk cache here, so if your app does not rely on browser
    storage like localStorage or cookies to save user data, it is recommended
    to set this directory to other locations to avoid polluting the `userData`
    directory.
  * `temp` Temporary directory.
  * `exe` The current executable file.
  * `module` The `libchromiumcontent` library.
  * `desktop` The current user's Desktop directory.
  * `documents` Directory for a user's "My Documents".
  * `downloads` Directory for a user's downloads.
  * `music` Directory for a user's music.
  * `pictures` Directory for a user's pictures.
  * `videos` Directory for a user's videos.
  * `recent` Directory for the user's recent files (Windows only).
  * `logs` Directory for your app's log folder.
  * `crashDumps` Directory where crash dumps are stored.

Returns `string` - A path to a special directory or file associated with `name`. On
failure, an `Error` is thrown.

If `app.getPath('logs')` is called without called `app.setAppLogsPath()` being called first, a default log directory will be created equivalent to calling `app.setAppLogsPath()` without a `path` parameter.

### `app.getFileIcon(path[, options])`

* `path` string
* `options` Object (optional)
  * `size` string
    * `small` - 16x16
    * `normal` - 32x32
    * `large` - 48x48 on _Linux_, 32x32 on _Windows_, unsupported on _macOS_.

Returns `Promise<NativeImage>` - fulfilled with the app's icon, which is a [NativeImage](native-image.md).

Fetches a path's associated icon.

On _Windows_, there a 2 kinds of icons:

* Icons associated with certain file extensions, like `.mp3`, `.png`, etc.
* Icons inside the file itself, like `.exe`, `.dll`, `.ico`.

On _Linux_ and _macOS_, icons depend on the application associated with file mime type.

### `app.setPath(name, path)`

* `name` string
* `path` string

Overrides the `path` to a special directory or file associated with `name`.
If the path specifies a directory that does not exist, an `Error` is thrown.
In that case, the directory should be created with `fs.mkdirSync` or similar.

You can only override paths of a `name` defined in `app.getPath`.

By default, web pages' cookies and caches will be stored under the `sessionData`
directory. If you want to change this location, you have to override the
`sessionData` path before the `ready` event of the `app` module is emitted.

### `app.getVersion()`

Returns `string` - The version of the loaded application. If no version is found in the
application's `package.json` file, the version of the current bundle or
executable is returned.

### `app.getName()`

Returns `string` - The current application's name, which is the name in the application's
`package.json` file.

Usually the `name` field of `package.json` is a short lowercase name, according
to the npm modules spec. You should usually also specify a `productName`
field, which is your application's full capitalized name, and which will be
preferred over `name` by Electron.

### `app.setName(name)`

* `name` string

Overrides the current application's name.

**Note:** This function overrides the name used internally by Electron; it does not affect the name that the OS uses.

### `app.getLocale()`

Returns `string` - The current application locale, fetched using Chromium's `l10n_util` library.
Possible return values are documented [here](https://source.chromium.org/chromium/chromium/src/+/main:ui/base/l10n/l10n_util.cc).

To set the locale, you'll want to use a command line switch at app startup, which may be found [here](command-line-switches.md).

**Note:** When distributing your packaged app, you have to also ship the
`locales` folder.

**Note:** This API must be called after the `ready` event is emitted.

**Note:** To see example return values of this API compared to other locale and language APIs, see [`app.getPreferredSystemLanguages()`](#appgetpreferredsystemlanguages).

### `app.getLocaleCountryCode()`

Returns `string` - User operating system's locale two-letter [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) country code. The value is taken from native OS APIs.

**Note:** When unable to detect locale country code, it returns empty string.

### `app.getSystemLocale()`

Returns `string` - The current system locale. On Windows and Linux, it is fetched using Chromium's `i18n` library. On macOS, `[NSLocale currentLocale]` is used instead. To get the user's current system language, which is not always the same as the locale, it is better to use [`app.getPreferredSystemLanguages()`](#appgetpreferredsystemlanguages).

Different operating systems also use the regional data differently:

* Windows 11 uses the regional format for numbers, dates, and times.
* macOS Monterey uses the region for formatting numbers, dates, times, and for selecting the currency symbol to use.

Therefore, this API can be used for purposes such as choosing a format for rendering dates and times in a calendar app, especially when the developer wants the format to be consistent with the OS.

**Note:** This API must be called after the `ready` event is emitted.

**Note:** To see example return values of this API compared to other locale and language APIs, see [`app.getPreferredSystemLanguages()`](#appgetpreferredsystemlanguages).

### `app.getPreferredSystemLanguages()`

Returns `string[]` - The user's preferred system languages from most preferred to least preferred, including the country codes if applicable. A user can modify and add to this list on Windows or macOS through the Language and Region settings.

The API uses `GlobalizationPreferences` (with a fallback to `GetSystemPreferredUILanguages`) on Windows, `\[NSLocale preferredLanguages\]` on macOS, and `g_get_language_names` on Linux.

This API can be used for purposes such as deciding what language to present the application in.

Here are some examples of return values of the various language and locale APIs with different configurations:

On Windows, given application locale is German, the regional format is Finnish (Finland), and the preferred system languages from most to least preferred are French (Canada), English (US), Simplified Chinese (China), Finnish, and Spanish (Latin America):

```js
app.getLocale() // 'de'
app.getSystemLocale() // 'fi-FI'
app.getPreferredSystemLanguages() // ['fr-CA', 'en-US', 'zh-Hans-CN', 'fi', 'es-419']
```

On macOS, given the application locale is German, the region is Finland, and the preferred system languages from most to least preferred are French (Canada), English (US), Simplified Chinese, and Spanish (Latin America):

```js
app.getLocale() // 'de'
app.getSystemLocale() // 'fr-FI'
app.getPreferredSystemLanguages() // ['fr-CA', 'en-US', 'zh-Hans-FI', 'es-419']
```

Both the available languages and regions and the possible return values differ between the two operating systems.

As can be seen with the example above, on Windows, it is possible that a preferred system language has no country code, and that one of the preferred system languages corresponds with the language used for the regional format. On macOS, the region serves more as a default country code: the user doesn't need to have Finnish as a preferred language to use Finland as the region,and the country code `FI` is used as the country code for preferred system languages that do not have associated countries in the language name.

### `app.addRecentDocument(path)` _macOS_ _Windows_

* `path` string

Adds `path` to the recent documents list.

This list is managed by the OS. On Windows, you can visit the list from the task
bar, and on macOS, you can visit it from dock menu.

### `app.clearRecentDocuments()` _macOS_ _Windows_

Clears the recent documents list.

### `app.setAsDefaultProtocolClient(protocol[, path, args])`

* `protocol` string - The name of your protocol, without `://`. For example,
  if you want your app to handle `electron://` links, call this method with
  `electron` as the parameter.
* `path` string (optional) _Windows_ - The path to the Electron executable.
  Defaults to `process.execPath`
* `args` string[] (optional) _Windows_ - Arguments passed to the executable.
  Defaults to an empty array

Returns `boolean` - Whether the call succeeded.

Sets the current executable as the default handler for a protocol (aka URI
scheme). It allows you to integrate your app deeper into the operating system.
Once registered, all links with `your-protocol://` will be opened with the
current executable. The whole link, including protocol, will be passed to your
application as a parameter.

**Note:** On macOS, you can only register protocols that have been added to
your app's `info.plist`, which cannot be modified at runtime. However, you can
change the file during build time via [Electron Forge][electron-forge],
[Electron Packager][electron-packager], or by editing `info.plist` with a text
editor. Please refer to [Apple's documentation][CFBundleURLTypes] for details.

**Note:** In a Windows Store environment (when packaged as an `appx`) this API
will return `true` for all calls but the registry key it sets won't be accessible
by other applications.  In order to register your Windows Store application
as a default protocol handler you must [declare the protocol in your manifest](https://learn.microsoft.com/en-us/uwp/schemas/appxpackage/uapmanifestschema/element-uap-protocol).

The API uses the Windows Registry and `LSSetDefaultHandlerForURLScheme` internally.

### `app.removeAsDefaultProtocolClient(protocol[, path, args])` _macOS_ _Windows_

* `protocol` string - The name of your protocol, without `://`.
* `path` string (optional) _Windows_ - Defaults to `process.execPath`
* `args` string[] (optional) _Windows_ - Defaults to an empty array

Returns `boolean` - Whether the call succeeded.

This method checks if the current executable as the default handler for a
protocol (aka URI scheme). If so, it will remove the app as the default handler.

### `app.isDefaultProtocolClient(protocol[, path, args])`

* `protocol` string - The name of your protocol, without `://`.
* `path` string (optional) _Windows_ - Defaults to `process.execPath`
* `args` string[] (optional) _Windows_ - Defaults to an empty array

Returns `boolean` - Whether the current executable is the default handler for a
protocol (aka URI scheme).

**Note:** On macOS, you can use this method to check if the app has been
registered as the default protocol handler for a protocol. You can also verify
this by checking `~/Library/Preferences/com.apple.LaunchServices.plist` on the
macOS machine. Please refer to
[Apple's documentation][LSCopyDefaultHandlerForURLScheme] for details.

The API uses the Windows Registry and `LSCopyDefaultHandlerForURLScheme` internally.

### `app.getApplicationNameForProtocol(url)`

* `url` string - a URL with the protocol name to check. Unlike the other
  methods in this family, this accepts an entire URL, including `://` at a
  minimum (e.g. `https://`).

Returns `string` - Name of the application handling the protocol, or an empty
  string if there is no handler. For instance, if Electron is the default
  handler of the URL, this could be `Electron` on Windows and Mac. However,
  don't rely on the precise format which is not guaranteed to remain unchanged.
  Expect a different format on Linux, possibly with a `.desktop` suffix.

This method returns the application name of the default handler for the protocol
(aka URI scheme) of a URL.

### `app.getApplicationInfoForProtocol(url)` _macOS_ _Windows_

* `url` string - a URL with the protocol name to check. Unlike the other
  methods in this family, this accepts an entire URL, including `://` at a
  minimum (e.g. `https://`).

Returns `Promise<Object>` - Resolve with an object containing the following:

* `icon` NativeImage - the display icon of the app handling the protocol.
* `path` string  - installation path of the app handling the protocol.
* `name` string - display name of the app handling the protocol.

This method returns a promise that contains the application name, icon and path of the default handler for the protocol
(aka URI scheme) of a URL.

### `app.setUserTasks(tasks)` _Windows_

* `tasks` [Task[]](structures/task.md) - Array of `Task` objects

Adds `tasks` to the [Tasks][tasks] category of the Jump List on Windows.

`tasks` is an array of [`Task`](structures/task.md) objects.

Returns `boolean` - Whether the call succeeded.

**Note:** If you'd like to customize the Jump List even more use
`app.setJumpList(categories)` instead.

### `app.getJumpListSettings()` _Windows_

Returns `Object`:

* `minItems` Integer - The minimum number of items that will be shown in the
  Jump List (for a more detailed description of this value see the
  [MSDN docs][JumpListBeginListMSDN]).
* `removedItems` [JumpListItem[]](structures/jump-list-item.md) - Array of `JumpListItem`
  objects that correspond to items that the user has explicitly removed from custom categories in the
  Jump List. These items must not be re-added to the Jump List in the **next**
  call to `app.setJumpList()`, Windows will not display any custom category
  that contains any of the removed items.

### `app.setJumpList(categories)` _Windows_

* `categories` [JumpListCategory[]](structures/jump-list-category.md) | `null` - Array of `JumpListCategory` objects.

Returns `string`

Sets or removes a custom Jump List for the application, and returns one of the
following strings:

* `ok` - Nothing went wrong.
* `error` - One or more errors occurred, enable runtime logging to figure out
  the likely cause.
* `invalidSeparatorError` - An attempt was made to add a separator to a
  custom category in the Jump List. Separators are only allowed in the
  standard `Tasks` category.
* `fileTypeRegistrationError` - An attempt was made to add a file link to
  the Jump List for a file type the app isn't registered to handle.
* `customCategoryAccessDeniedError` - Custom categories can't be added to the
  Jump List due to user privacy or group policy settings.

If `categories` is `null` the previously set custom Jump List (if any) will be
replaced by the standard Jump List for the app (managed by Windows).

**Note:** If a `JumpListCategory` object has neither the `type` nor the `name`
property set then its `type` is assumed to be `tasks`. If the `name` property
is set but the `type` property is omitted then the `type` is assumed to be
`custom`.

**Note:** Users can remove items from custom categories, and Windows will not
allow a removed item to be added back into a custom category until **after**
the next successful call to `app.setJumpList(categories)`. Any attempt to
re-add a removed item to a custom category earlier than that will result in the
entire custom category being omitted from the Jump List. The list of removed
items can be obtained using `app.getJumpListSettings()`.

**Note:** The maximum length of a Jump List item's `description` property is
260 characters. Beyond this limit, the item will not be added to the Jump
List, nor will it be displayed.

Here's a very simple example of creating a custom Jump List:

```js
const { app } = require('electron')

app.setJumpList([
  {
    type: 'custom',
    name: 'Recent Projects',
    items: [
      { type: 'file', path: 'C:\\Projects\\project1.proj' },
      { type: 'file', path: 'C:\\Projects\\project2.proj' }
    ]
  },
  { // has a name so `type` is assumed to be "custom"
    name: 'Tools',
    items: [
      {
        type: 'task',
        title: 'Tool A',
        program: process.execPath,
        args: '--run-tool-a',
        iconPath: process.execPath,
        iconIndex: 0,
        description: 'Runs Tool A'
      },
      {
        type: 'task',
        title: 'Tool B',
        program: process.execPath,
        args: '--run-tool-b',
        iconPath: process.execPath,
        iconIndex: 0,
        description: 'Runs Tool B'
      }
    ]
  },
  { type: 'frequent' },
  { // has no name and no type so `type` is assumed to be "tasks"
    items: [
      {
        type: 'task',
        title: 'New Project',
        program: process.execPath,
        args: '--new-project',
        description: 'Create a new project.'
      },
      { type: 'separator' },
      {
        type: 'task',
        title: 'Recover Project',
        program: process.execPath,
        args: '--recover-project',
        description: 'Recover Project'
      }
    ]
  }
])
```

### `app.requestSingleInstanceLock([additionalData])`

* `additionalData` Record\<any, any\> (optional) - A JSON object containing additional data to send to the first instance.

Returns `boolean`

The return value of this method indicates whether or not this instance of your
application successfully obtained the lock.  If it failed to obtain the lock,
you can assume that another instance of your application is already running with
the lock and exit immediately.

I.e. This method returns `true` if your process is the primary instance of your
application and your app should continue loading.  It returns `false` if your
process should immediately quit as it has sent its parameters to another
instance that has already acquired the lock.

On macOS, the system enforces single instance automatically when users try to open
a second instance of your app in Finder, and the `open-file` and `open-url`
events will be emitted for that. However when users start your app in command
line, the system's single instance mechanism will be bypassed, and you have to
use this method to ensure single instance.

An example of activating the window of primary instance when a second instance
starts:

```js
const { app, BrowserWindow } = require('electron')
let myWindow = null

const additionalData = { myKey: 'myValue' }
const gotTheLock = app.requestSingleInstanceLock(additionalData)

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory, additionalData) => {
    // Print out data received from the second instance.
    console.log(additionalData)

    // Someone tried to run a second instance, we should focus our window.
    if (myWindow) {
      if (myWindow.isMinimized()) myWindow.restore()
      myWindow.focus()
    }
  })

  app.whenReady().then(() => {
    myWindow = new BrowserWindow({})
    myWindow.loadURL('https://electronjs.org')
  })
}
```

### `app.hasSingleInstanceLock()`

Returns `boolean`

This method returns whether or not this instance of your app is currently
holding the single instance lock.  You can request the lock with
`app.requestSingleInstanceLock()` and release with
`app.releaseSingleInstanceLock()`

### `app.releaseSingleInstanceLock()`

Releases all locks that were created by `requestSingleInstanceLock`. This will
allow multiple instances of the application to once again run side by side.

### `app.setUserActivity(type, userInfo[, webpageURL])` _macOS_

* `type` string - Uniquely identifies the activity. Maps to
  [`NSUserActivity.activityType`][activity-type].
* `userInfo` any - App-specific state to store for use by another device.
* `webpageURL` string (optional) - The webpage to load in a browser if no suitable app is
  installed on the resuming device. The scheme must be `http` or `https`.

Creates an `NSUserActivity` and sets it as the current activity. The activity
is eligible for [Handoff][handoff] to another device afterward.

### `app.getCurrentActivityType()` _macOS_

Returns `string` - The type of the currently running activity.

### `app.invalidateCurrentActivity()` _macOS_

Invalidates the current [Handoff][handoff] user activity.

### `app.resignCurrentActivity()` _macOS_

Marks the current [Handoff][handoff] user activity as inactive without invalidating it.

### `app.updateCurrentActivity(type, userInfo)` _macOS_

* `type` string - Uniquely identifies the activity. Maps to
  [`NSUserActivity.activityType`][activity-type].
* `userInfo` any - App-specific state to store for use by another device.

Updates the current activity if its type matches `type`, merging the entries from
`userInfo` into its current `userInfo` dictionary.

### `app.setAppUserModelId(id)` _Windows_

* `id` string

Changes the [Application User Model ID][app-user-model-id] to `id`.

### `app.setActivationPolicy(policy)` _macOS_

* `policy` string - Can be 'regular', 'accessory', or 'prohibited'.

Sets the activation policy for a given app.

Activation policy types:

* 'regular' - The application is an ordinary app that appears in the Dock and may have a user interface.
* 'accessory' - The application doesn’t appear in the Dock and doesn’t have a menu bar, but it may be activated programmatically or by clicking on one of its windows.
* 'prohibited' - The application doesn’t appear in the Dock and may not create windows or be activated.

### `app.importCertificate(options, callback)` _Linux_

* `options` Object
  * `certificate` string - Path for the pkcs12 file.
  * `password` string - Passphrase for the certificate.
* `callback` Function
  * `result` Integer - Result of import.

Imports the certificate in pkcs12 format into the platform certificate store.
`callback` is called with the `result` of import operation, a value of `0`
indicates success while any other value indicates failure according to Chromium [net_error_list](https://source.chromium.org/chromium/chromium/src/+/main:net/base/net_error_list.h).

### `app.configureHostResolver(options)`

* `options` Object
  * `enableBuiltInResolver` boolean (optional) - Whether the built-in host
    resolver is used in preference to getaddrinfo. When enabled, the built-in
    resolver will attempt to use the system's DNS settings to do DNS lookups
    itself. Enabled by default on macOS, disabled by default on Windows and
    Linux.
  * `enableHappyEyeballs` boolean (optional) - Whether the
    [Happy Eyeballs V3][happy-eyeballs-v3] algorithm should be used in creating
    network connections. When enabled, hostnames resolving to multiple IP
    addresses will be attempted in parallel to have a chance at establishing a
    connection more quickly.
  * `secureDnsMode` string (optional) - Can be 'off', 'automatic' or 'secure'.
    Configures the DNS-over-HTTP mode. When 'off', no DoH lookups will be
    performed. When 'automatic', DoH lookups will be performed first if DoH is
    available, and insecure DNS lookups will be performed as a fallback. When
    'secure', only DoH lookups will be performed. Defaults to 'automatic'.
  * `secureDnsServers` string[]&#32;(optional) - A list of DNS-over-HTTP
    server templates. See [RFC8484 § 3][] for details on the template format.
    Most servers support the POST method; the template for such servers is
    simply a URI. Note that for [some DNS providers][doh-providers], the
    resolver will automatically upgrade to DoH unless DoH is explicitly
    disabled, even if there are no DoH servers provided in this list.
  * `enableAdditionalDnsQueryTypes` boolean (optional) - Controls whether additional DNS
    query types, e.g. HTTPS (DNS type 65) will be allowed besides the
    traditional A and AAAA queries when a request is being made via insecure
    DNS. Has no effect on Secure DNS which always allows additional types.
    Defaults to true.

Configures host resolution (DNS and DNS-over-HTTPS). By default, the following
resolvers will be used, in order:

1. DNS-over-HTTPS, if the [DNS provider supports it][doh-providers], then
2. the built-in resolver (enabled on macOS only by default), then
3. the system's resolver (e.g. `getaddrinfo`).

This can be configured to either restrict usage of non-encrypted DNS
(`secureDnsMode: "secure"`), or disable DNS-over-HTTPS (`secureDnsMode:
"off"`). It is also possible to enable or disable the built-in resolver.

To disable insecure DNS, you can specify a `secureDnsMode` of `"secure"`. If you do
so, you should make sure to provide a list of DNS-over-HTTPS servers to use, in
case the user's DNS configuration does not include a provider that supports
DoH.

```js
const { app } = require('electron')

app.whenReady().then(() => {
  app.configureHostResolver({
    secureDnsMode: 'secure',
    secureDnsServers: [
      'https://cloudflare-dns.com/dns-query'
    ]
  })
})
```

This API must be called after the `ready` event is emitted.

[doh-providers]: https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=31?q=%22DohProviderEntry::GetList()%22&ss=chromium%2Fchromium%2Fsrc
[RFC8484 § 3]: https://datatracker.ietf.org/doc/html/rfc8484#section-3

### `app.disableHardwareAcceleration()`

Disables hardware acceleration for current app.

This method can only be called before app is ready.

### `app.disableDomainBlockingFor3DAPIs()`

By default, Chromium disables 3D APIs (e.g. WebGL) until restart on a per
domain basis if the GPU processes crashes too frequently. This function
disables that behavior.

This method can only be called before app is ready.

### `app.getAppMetrics()`

Returns [`ProcessMetric[]`](structures/process-metric.md): Array of `ProcessMetric` objects that correspond to memory and CPU usage statistics of all the processes associated with the app.

### `app.getGPUFeatureStatus()`

Returns [`GPUFeatureStatus`](structures/gpu-feature-status.md) - The Graphics Feature Status from `chrome://gpu/`.

**Note:** This information is only usable after the `gpu-info-update` event is emitted.

### `app.getGPUInfo(infoType)`

* `infoType` string - Can be `basic` or `complete`.

Returns `Promise<unknown>`

For `infoType` equal to `complete`:
 Promise is fulfilled with `Object` containing all the GPU Information as in [chromium's GPUInfo object](https://chromium.googlesource.com/chromium/src/+/4178e190e9da409b055e5dff469911ec6f6b716f/gpu/config/gpu_info.cc). This includes the version and driver information that's shown on `chrome://gpu` page.

For `infoType` equal to `basic`:
  Promise is fulfilled with `Object` containing fewer attributes than when requested with `complete`. Here's an example of basic response:

```js
{
  auxAttributes:
   {
     amdSwitchable: true,
     canSupportThreadedTextureMailbox: false,
     directComposition: false,
     directRendering: true,
     glResetNotificationStrategy: 0,
     inProcessGpu: true,
     initializationTime: 0,
     jpegDecodeAcceleratorSupported: false,
     optimus: false,
     passthroughCmdDecoder: false,
     sandboxed: false,
     softwareRendering: false,
     supportsOverlays: false,
     videoDecodeAcceleratorFlags: 0
   },
  gpuDevice:
   [{ active: true, deviceId: 26657, vendorId: 4098 },
     { active: false, deviceId: 3366, vendorId: 32902 }],
  machineModelName: 'MacBookPro',
  machineModelVersion: '11.5'
}
```

Using `basic` should be preferred if only basic information like `vendorId` or `deviceId` is needed.

### `app.setBadgeCount([count])` _Linux_ _macOS_

* `count` Integer (optional) - If a value is provided, set the badge to the provided value otherwise, on macOS, display a plain white dot (e.g. unknown number of notifications). On Linux, if a value is not provided the badge will not display.

Returns `boolean` - Whether the call succeeded.

Sets the counter badge for current app. Setting the count to `0` will hide the
badge.

On macOS, it shows on the dock icon. On Linux, it only works for Unity launcher.

**Note:** Unity launcher requires a `.desktop` file to work. For more information,
please read the [Unity integration documentation][unity-requirement].

**Note:** On macOS, you need to ensure that your application has the permission
to display notifications for this method to work.

### `app.getBadgeCount()` _Linux_ _macOS_

Returns `Integer` - The current value displayed in the counter badge.

### `app.isUnityRunning()` _Linux_

Returns `boolean` - Whether the current desktop environment is Unity launcher.

### `app.getLoginItemSettings([options])` _macOS_ _Windows_

* `options` Object (optional)
  * `type` string (optional) _macOS_ - Can be one of `mainAppService`, `agentService`, `daemonService`, or `loginItemService`. Defaults to `mainAppService`. Only available on macOS 13 and up. See [app.setLoginItemSettings](app.md#appsetloginitemsettingssettings-macos-windows) for more information about each type.
  * `serviceName` string (optional) _macOS_ - The name of the service. Required if `type` is non-default. Only available on macOS 13 and up.
  * `path` string (optional) _Windows_ - The executable path to compare against. Defaults to `process.execPath`.
  * `args` string[] (optional) _Windows_ - The command-line arguments to compare against. Defaults to an empty array.

If you provided `path` and `args` options to `app.setLoginItemSettings`, then you
need to pass the same arguments here for `openAtLogin` to be set correctly.

Returns `Object`:

* `openAtLogin` boolean - `true` if the app is set to open at login.
* `openAsHidden` boolean _macOS_ _Deprecated_ - `true` if the app is set to open as hidden at login. This does not work on macOS 13 and up.
* `wasOpenedAtLogin` boolean _macOS_ - `true` if the app was opened at login automatically.
* `wasOpenedAsHidden` boolean _macOS_ _Deprecated_ - `true` if the app was opened as a hidden login item. This indicates that the app should not open any windows at startup. This setting is not available on [MAS builds][mas-builds] or on macOS 13 and up.
* `restoreState` boolean _macOS_ _Deprecated_ - `true` if the app was opened as a login item that should restore the state from the previous session. This indicates that the app should restore the windows that were open the last time the app was closed. This setting is not available on [MAS builds][mas-builds] or on macOS 13 and up.
* `status` string _macOS_ - can be one of `not-registered`, `enabled`, `requires-approval`, or `not-found`.
* `executableWillLaunchAtLogin` boolean _Windows_ - `true` if app is set to open at login and its run key is not deactivated. This differs from `openAtLogin` as it ignores the `args` option, this property will be true if the given executable would be launched at login with **any** arguments.
* `launchItems` Object[] _Windows_
  * `name` string _Windows_ - name value of a registry entry.
  * `path` string _Windows_ - The executable to an app that corresponds to a registry entry.
  * `args` string[] _Windows_ - the command-line arguments to pass to the executable.
  * `scope` string _Windows_ - one of `user` or `machine`. Indicates whether the registry entry is under `HKEY_CURRENT USER` or `HKEY_LOCAL_MACHINE`.
  * `enabled` boolean _Windows_ - `true` if the app registry key is startup approved and therefore shows as `enabled` in Task Manager and Windows settings.

### `app.setLoginItemSettings(settings)` _macOS_ _Windows_

* `settings` Object
  * `openAtLogin` boolean (optional) - `true` to open the app at login, `false` to remove
    the app as a login item. Defaults to `false`.
  * `openAsHidden` boolean (optional) _macOS_ _Deprecated_ - `true` to open the app as hidden. Defaults to `false`. The user can edit this setting from the System Preferences so `app.getLoginItemSettings().wasOpenedAsHidden` should be checked when the app is opened to know the current value. This setting is not available on [MAS builds][mas-builds] or on macOS 13 and up.
  * `type` string (optional) _macOS_ - The type of service to add as a login item. Defaults to `mainAppService`. Only available on macOS 13 and up.
    * `mainAppService` - The primary application.
    * `agentService` - The property list name for a launch agent. The property list name must correspond to a property list in the app’s `Contents/Library/LaunchAgents` directory.
    * `daemonService` string (optional) _macOS_ - The property list name for a launch agent. The property list name must correspond to a property list in the app’s `Contents/Library/LaunchDaemons` directory.
    * `loginItemService` string (optional) _macOS_ - The property list name for a login item service. The property list name must correspond to a property list in the app’s `Contents/Library/LoginItems` directory.
  * `serviceName` string (optional) _macOS_ - The name of the service. Required if `type` is non-default. Only available on macOS 13 and up.
  * `path` string (optional) _Windows_ - The executable to launch at login.
    Defaults to `process.execPath`.
  * `args` string[] (optional) _Windows_ - The command-line arguments to pass to
    the executable. Defaults to an empty array. Take care to wrap paths in
    quotes.
  * `enabled` boolean (optional) _Windows_ - `true` will change the startup approved registry key and `enable / disable` the App in Task Manager and Windows Settings.
    Defaults to `true`.
  * `name` string (optional) _Windows_ - value name to write into registry. Defaults to the app's AppUserModelId().

Set the app's login item settings.

To work with Electron's `autoUpdater` on Windows, which uses [Squirrel][Squirrel-Windows],
you'll want to set the launch path to your executable's name but a directory up, which is
a stub application automatically generated by Squirrel which will automatically launch the
latest version.

``` js
const { app } = require('electron')
const path = require('node:path')

const appFolder = path.dirname(process.execPath)
const ourExeName = path.basename(process.execPath)
const stubLauncher = path.resolve(appFolder, '..', ourExeName)

app.setLoginItemSettings({
  openAtLogin: true,
  path: stubLauncher,
  args: [
    // You might want to pass a parameter here indicating that this
    // app was launched via login, but you don't have to
  ]
})
```

For more information about setting different services as login items on macOS 13 and up, see [`SMAppService`](https://developer.apple.com/documentation/servicemanagement/smappservice?language=objc).

### `app.isAccessibilitySupportEnabled()` _macOS_ _Windows_

Returns `boolean` - `true` if Chrome's accessibility support is enabled,
`false` otherwise. This API will return `true` if the use of assistive
technologies, such as screen readers, has been detected. See
https://www.chromium.org/developers/design-documents/accessibility for more
details.

### `app.setAccessibilitySupportEnabled(enabled)` _macOS_ _Windows_

* `enabled` boolean - Enable or disable [accessibility tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree) rendering

Manually enables Chrome's accessibility support, allowing to expose accessibility switch to users in application settings. See [Chromium's accessibility docs](https://www.chromium.org/developers/design-documents/accessibility) for more
details. Disabled by default.

This API must be called after the `ready` event is emitted.

**Note:** Rendering accessibility tree can significantly affect the performance of your app. It should not be enabled by default.

### `app.showAboutPanel()`

Show the app's about panel options. These options can be overridden with `app.setAboutPanelOptions(options)`. This function runs asynchronously.

### `app.setAboutPanelOptions(options)`

* `options` Object
  * `applicationName` string (optional) - The app's name.
  * `applicationVersion` string (optional) - The app's version.
  * `copyright` string (optional) - Copyright information.
  * `version` string (optional) _macOS_ - The app's build version number.
  * `credits` string (optional) _macOS_ _Windows_ - Credit information.
  * `authors` string[] (optional) _Linux_ - List of app authors.
  * `website` string (optional) _Linux_ - The app's website.
  * `iconPath` string (optional) _Linux_ _Windows_ - Path to the app's icon in a JPEG or PNG file format. On Linux, will be shown as 64x64 pixels while retaining aspect ratio. On Windows, a 48x48 PNG will result in the best visual quality.

Set the about panel options. This will override the values defined in the app's `.plist` file on macOS. See the [Apple docs][about-panel-options] for more details. On Linux, values must be set in order to be shown; there are no defaults.

If you do not set `credits` but still wish to surface them in your app, AppKit will look for a file named "Credits.html", "Credits.rtf", and "Credits.rtfd", in that order, in the bundle returned by the NSBundle class method main. The first file found is used, and if none is found, the info area is left blank. See Apple [documentation](https://developer.apple.com/documentation/appkit/nsaboutpaneloptioncredits?language=objc) for more information.

### `app.isEmojiPanelSupported()`

Returns `boolean` - whether or not the current OS version allows for native emoji pickers.

### `app.showEmojiPanel()` _macOS_ _Windows_

Show the platform's native emoji picker.

### `app.startAccessingSecurityScopedResource(bookmarkData)` _mas_

* `bookmarkData` string - The base64 encoded security scoped bookmark data returned by the `dialog.showOpenDialog` or `dialog.showSaveDialog` methods.

Returns `Function` - This function **must** be called once you have finished accessing the security scoped file. If you do not remember to stop accessing the bookmark, [kernel resources will be leaked](https://developer.apple.com/reference/foundation/nsurl/1417051-startaccessingsecurityscopedreso?language=objc) and your app will lose its ability to reach outside the sandbox completely, until your app is restarted.

```js
const { app, dialog } = require('electron')
const fs = require('node:fs')

let filepath
let bookmark

dialog.showOpenDialog(null, { securityScopedBookmarks: true }).then(({ filePaths, bookmarks }) => {
  filepath = filePaths[0]
  bookmark = bookmarks[0]
  fs.readFileSync(filepath)
})

// ... restart app ...

const stopAccessingSecurityScopedResource = app.startAccessingSecurityScopedResource(bookmark)
fs.readFileSync(filepath)
stopAccessingSecurityScopedResource()
```

Start accessing a security scoped resource. With this method Electron applications that are packaged for the Mac App Store may reach outside their sandbox to access files chosen by the user. See [Apple's documentation](https://developer.apple.com/library/content/documentation/Security/Conceptual/AppSandboxDesignGuide/AppSandboxInDepth/AppSandboxInDepth.html#//apple_ref/doc/uid/TP40011183-CH3-SW16) for a description of how this system works.

### `app.enableSandbox()`

Enables full sandbox mode on the app. This means that all renderers will be launched sandboxed, regardless of the value of the `sandbox` flag in [`WebPreferences`](structures/web-preferences.md).

This method can only be called before app is ready.

### `app.isInApplicationsFolder()` _macOS_

Returns `boolean` - Whether the application is currently running from the
systems Application folder. Use in combination with `app.moveToApplicationsFolder()`

### `app.moveToApplicationsFolder([options])` _macOS_

* `options` Object (optional)
  * `conflictHandler` Function\<boolean> (optional) - A handler for potential conflict in move failure.
    * `conflictType` string - The type of move conflict encountered by the handler; can be `exists` or `existsAndRunning`, where `exists` means that an app of the same name is present in the Applications directory and `existsAndRunning` means both that it exists and that it's presently running.

Returns `boolean` - Whether the move was successful. Please note that if
the move is successful, your application will quit and relaunch.

No confirmation dialog will be presented by default. If you wish to allow
the user to confirm the operation, you may do so using the
[`dialog`](dialog.md) API.

**NOTE:** This method throws errors if anything other than the user causes the
move to fail. For instance if the user cancels the authorization dialog, this
method returns false. If we fail to perform the copy, then this method will
throw an error. The message in the error should be informative and tell
you exactly what went wrong.

By default, if an app of the same name as the one being moved exists in the Applications directory and is _not_ running, the existing app will be trashed and the active app moved into its place. If it _is_ running, the preexisting running app will assume focus and the previously active app will quit itself. This behavior can be changed by providing the optional conflict handler, where the boolean returned by the handler determines whether or not the move conflict is resolved with default behavior.  i.e. returning `false` will ensure no further action is taken, returning `true` will result in the default behavior and the method continuing.

For example:

```js
const { app, dialog } = require('electron')

app.moveToApplicationsFolder({
  conflictHandler: (conflictType) => {
    if (conflictType === 'exists') {
      return dialog.showMessageBoxSync({
        type: 'question',
        buttons: ['Halt Move', 'Continue Move'],
        defaultId: 0,
        message: 'An app of this name already exists'
      }) === 1
    }
  }
})
```

Would mean that if an app already exists in the user directory, if the user chooses to 'Continue Move' then the function would continue with its default behavior and the existing app will be trashed and the active app moved into its place.

### `app.isSecureKeyboardEntryEnabled()` _macOS_

Returns `boolean` - whether `Secure Keyboard Entry` is enabled.

By default this API will return `false`.

### `app.setSecureKeyboardEntryEnabled(enabled)` _macOS_

* `enabled` boolean - Enable or disable `Secure Keyboard Entry`

Set the `Secure Keyboard Entry` is enabled in your application.

By using this API, important information such as password and other sensitive information can be prevented from being intercepted by other processes.

See [Apple's documentation](https://developer.apple.com/library/archive/technotes/tn2150/_index.html) for more
details.

**Note:** Enable `Secure Keyboard Entry` only when it is needed and disable it when it is no longer needed.

### `app.setProxy(config)`

* `config` [ProxyConfig](structures/proxy-config.md)

Returns `Promise<void>` - Resolves when the proxy setting process is complete.

Sets the proxy settings for networks requests made without an associated [Session](session.md).
Currently this will affect requests made with [Net](net.md) in the [utility process](../glossary.md#utility-process)
and internal requests made by the runtime (ex: geolocation queries).

This method can only be called after app is ready.

### `app.resolveProxy(url)`

* `url` URL

Returns `Promise<string>` - Resolves with the proxy information for `url` that will be used when attempting to make requests using [Net](net.md) in the [utility process](../glossary.md#utility-process).

### `app.setClientCertRequestPasswordHandler(handler)`  _Linux_

* `handler` Function\<Promise\<string\>\>
  * `clientCertRequestParams` Object
    * `hostname` string - the hostname of the site requiring a client certificate
    * `tokenName` string - the token (or slot) name of the cryptographic device
    * `isRetry` boolean - whether there have been previous failed attempts at prompting the password

  Returns `Promise<string>` - Resolves with the password

The handler is called when a password is needed to unlock a client certificate for
`hostname`.

```js
const { app } = require('electron')

async function passwordPromptUI (text) {
  return new Promise((resolve, reject) => {
    // display UI to prompt user for password
    // ...
    // ...
    resolve('the password')
  })
}

app.setClientCertRequestPasswordHandler(async ({ hostname, tokenName, isRetry }) => {
  const text = `Please sign in to ${tokenName} to authenticate to ${hostname} with your certificate`
  const password = await passwordPromptUI(text)
  return password
})
```

## Properties

### `app.accessibilitySupportEnabled` _macOS_ _Windows_

A `boolean` property that's `true` if Chrome's accessibility support is enabled, `false` otherwise. This property will be `true` if the use of assistive technologies, such as screen readers, has been detected. Setting this property to `true` manually enables Chrome's accessibility support, allowing developers to expose accessibility switch to users in application settings.

See [Chromium's accessibility docs](https://www.chromium.org/developers/design-documents/accessibility) for more details. Disabled by default.

This API must be called after the `ready` event is emitted.

**Note:** Rendering accessibility tree can significantly affect the performance of your app. It should not be enabled by default.

### `app.applicationMenu`

A `Menu | null` property that returns [`Menu`](menu.md) if one has been set and `null` otherwise.
Users can pass a [Menu](menu.md) to set this property.

### `app.badgeCount` _Linux_ _macOS_

An `Integer` property that returns the badge count for current app. Setting the count to `0` will hide the badge.

On macOS, setting this with any nonzero integer shows on the dock icon. On Linux, this property only works for Unity launcher.

**Note:** Unity launcher requires a `.desktop` file to work. For more information,
please read the [Unity integration documentation][unity-requirement].

**Note:** On macOS, you need to ensure that your application has the permission
to display notifications for this property to take effect.

### `app.commandLine` _Readonly_

A [`CommandLine`](./command-line.md) object that allows you to read and manipulate the
command line arguments that Chromium uses.

### `app.dock` _macOS_ _Readonly_

A `Dock | undefined` property ([`Dock`](./dock.md) on macOS, `undefined` on all other
platforms) that allows you to perform actions on your app icon in the user's dock.

### `app.isPackaged` _Readonly_

A `boolean` property that returns  `true` if the app is packaged, `false` otherwise. For many apps, this property can be used to distinguish development and production environments.

[tasks]:https://learn.microsoft.com/en-us/windows/win32/shell/taskbar-extensions#tasks
[app-user-model-id]: https://learn.microsoft.com/en-us/windows/win32/shell/appids
[electron-forge]: https://www.electronforge.io/
[electron-packager]: https://github.com/electron/packager
[CFBundleURLTypes]: https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/TP40009249-102207-TPXREF115
[LSCopyDefaultHandlerForURLScheme]: https://developer.apple.com/documentation/coreservices/1441725-lscopydefaulthandlerforurlscheme?language=objc
[handoff]: https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html
[activity-type]: https://developer.apple.com/library/ios/documentation/Foundation/Reference/NSUserActivity_Class/index.html#//apple_ref/occ/instp/NSUserActivity/activityType
[unity-requirement]: https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles#Adding_shortcuts_to_a_launcher
[mas-builds]: ../tutorial/mac-app-store-submission-guide.md
[Squirrel-Windows]: https://github.com/Squirrel/Squirrel.Windows
[JumpListBeginListMSDN]: https://learn.microsoft.com/en-us/windows/win32/api/shobjidl_core/nf-shobjidl_core-icustomdestinationlist-beginlist
[about-panel-options]: https://developer.apple.com/reference/appkit/nsapplication/1428479-orderfrontstandardaboutpanelwith?language=objc
[happy-eyeballs-v3]: https://datatracker.ietf.org/doc/draft-pauly-happy-happyeyeballs-v3/

### `app.name`

A `string` property that indicates the current application's name, which is the name in the application's `package.json` file.

Usually the `name` field of `package.json` is a short lowercase name, according
to the npm modules spec. You should usually also specify a `productName`
field, which is your application's full capitalized name, and which will be
preferred over `name` by Electron.

### `app.userAgentFallback`

A `string` which is the user agent string Electron will use as a global fallback.

This is the user agent that will be used when no user agent is set at the
`webContents` or `session` level.  It is useful for ensuring that your entire
app has the same user agent.  Set to a custom value as early as possible
in your app's initialization to ensure that your overridden value is used.

### `app.runningUnderARM64Translation` _Readonly_ _macOS_ _Windows_

A `boolean` which when `true` indicates that the app is currently running under
an ARM64 translator (like the macOS
[Rosetta Translator Environment](https://en.wikipedia.org/wiki/Rosetta_(software))
or Windows [WOW](https://en.wikipedia.org/wiki/Windows_on_Windows)).

You can use this property to prompt users to download the arm64 version of
your application when they are mistakenly running the x64 version under Rosetta or WOW.



================================================
FILE: docs/api/auto-updater.md
================================================
# autoUpdater

> Enable apps to automatically update themselves.

Process: [Main](../glossary.md#main-process)

**See also: [A detailed guide about how to implement updates in your application](../tutorial/updates.md).**

`autoUpdater` is an [EventEmitter][event-emitter].

## Platform Notices

Currently, only macOS and Windows are supported. There is no built-in support
for auto-updater on Linux, so it is recommended to use the
distribution's package manager to update your app.

In addition, there are some subtle differences on each platform:

### macOS

On macOS, the `autoUpdater` module is built upon [Squirrel.Mac][squirrel-mac],
meaning you don't need any special setup to make it work. For server-side
requirements, you can read [Server Support][server-support]. Note that
[App Transport Security](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW35)
(ATS) applies to all requests made as part of the
update process. Apps that need to disable ATS can add the
`NSAllowsArbitraryLoads` key to their app's plist.

**Note:** Your application must be signed for automatic updates on macOS.
This is a requirement of `Squirrel.Mac`.

### Windows

On Windows, you have to install your app into a user's machine before you can
use the `autoUpdater`, so it is recommended that you use
[electron-winstaller][installer-lib] or [Electron Forge's Squirrel.Windows maker][electron-forge-lib] to generate a Windows installer.

Apps built with Squirrel.Windows will trigger [custom launch events](https://github.com/Squirrel/Squirrel.Windows/blob/51f5e2cb01add79280a53d51e8d0cfa20f8c9f9f/docs/using/custom-squirrel-events-non-cs.md#application-startup-commands)
that must be handled by your Electron application to ensure proper setup and teardown.

Squirrel.Windows apps will launch with the `--squirrel-firstrun` argument immediately
after installation. During this time, Squirrel.Windows will obtain a file lock on
your app, and `autoUpdater` requests will fail until the lock is released. In practice,
this means that you won't be able to check for updates on first launch for the first
few seconds. You can work around this by not checking for updates when `process.argv`
contains the `--squirrel-firstrun` flag or by setting a 10-second timeout on your
update checks (see [electron/electron#7155](https://github.com/electron/electron/issues/7155)
for more information).

The installer generated with Squirrel.Windows will create a shortcut icon with an
[Application User Model ID][app-user-model-id] in the format of
`com.squirrel.PACKAGE_ID.YOUR_EXE_WITHOUT_DOT_EXE`, examples are
`com.squirrel.slack.Slack` and `com.squirrel.code.Code`. You have to use the
same ID for your app with `app.setAppUserModelId` API, otherwise Windows will
not be able to pin your app properly in task bar.

## Events

The `autoUpdater` object emits the following events:

### Event: 'error'

Returns:

* `error` Error

Emitted when there is an error while updating.

### Event: 'checking-for-update'

Emitted when checking for an available update has started.

### Event: 'update-available'

Emitted when there is an available update. The update is downloaded
automatically.

### Event: 'update-not-available'

Emitted when there is no available update.

### Event: 'update-downloaded'

Returns:

* `event` Event
* `releaseNotes` string
* `releaseName` string
* `releaseDate` Date
* `updateURL` string

Emitted when an update has been downloaded.

On Windows only `releaseName` is available.

**Note:** It is not strictly necessary to handle this event. A successfully
downloaded update will still be applied the next time the application starts.

### Event: 'before-quit-for-update'

This event is emitted after a user calls `quitAndInstall()`.

When this API is called, the `before-quit` event is not emitted before all windows are closed. As a result you should listen to this event if you wish to perform actions before the windows are closed while a process is quitting, as well as listening to `before-quit`.

## Methods

The `autoUpdater` object has the following methods:

### `autoUpdater.setFeedURL(options)`

* `options` Object
  * `url` string
  * `headers` Record\<string, string\> (optional) _macOS_ - HTTP request headers.
  * `serverType` string (optional) _macOS_ - Can be `json` or `default`, see the [Squirrel.Mac][squirrel-mac]
    README for more information.

Sets the `url` and initialize the auto updater.

### `autoUpdater.getFeedURL()`

Returns `string` - The current update feed URL.

### `autoUpdater.checkForUpdates()`

Asks the server whether there is an update. You must call `setFeedURL` before
using this API.

**Note:** If an update is available it will be downloaded automatically.
Calling `autoUpdater.checkForUpdates()` twice will download the update two times.

### `autoUpdater.quitAndInstall()`

Restarts the app and installs the update after it has been downloaded. It
should only be called after `update-downloaded` has been emitted.

Under the hood calling `autoUpdater.quitAndInstall()` will close all application
windows first, and automatically call `app.quit()` after all windows have been
closed.

**Note:** It is not strictly necessary to call this function to apply an update,
as a successfully downloaded update will always be applied the next time the
application starts.

[squirrel-mac]: https://github.com/Squirrel/Squirrel.Mac
[server-support]: https://github.com/Squirrel/Squirrel.Mac#server-support
[installer-lib]: https://github.com/electron/windows-installer
[electron-forge-lib]: https://www.electronforge.io/config/makers/squirrel.windows
[app-user-model-id]: https://learn.microsoft.com/en-us/windows/win32/shell/appids
[event-emitter]: https://nodejs.org/api/events.html#events_class_eventemitter



================================================
FILE: docs/api/base-window.md
================================================
# BaseWindow

> Create and control windows.

Process: [Main](../glossary.md#main-process)

> **Note**
> `BaseWindow` provides a flexible way to compose multiple web views in a
> single window. For windows with only a single, full-size web view, the
> [`BrowserWindow`](browser-window.md) class may be a simpler option.

This module cannot be used until the `ready` event of the `app`
module is emitted.

```js
// In the main process.
const { BaseWindow, WebContentsView } = require('electron')

const win = new BaseWindow({ width: 800, height: 600 })

const leftView = new WebContentsView()
leftView.webContents.loadURL('https://electronjs.org')
win.contentView.addChildView(leftView)

const rightView = new WebContentsView()
rightView.webContents.loadURL('https://github.com/electron/electron')
win.contentView.addChildView(rightView)

leftView.setBounds({ x: 0, y: 0, width: 400, height: 600 })
rightView.setBounds({ x: 400, y: 0, width: 400, height: 600 })
```

## Parent and child windows

By using `parent` option, you can create child windows:

```js
const { BaseWindow } = require('electron')

const parent = new BaseWindow()
const child = new BaseWindow({ parent })
```

The `child` window will always show on top of the `parent` window.

## Modal windows

A modal window is a child window that disables parent window. To create a modal
window, you have to set both the `parent` and `modal` options:

```js
const { BaseWindow } = require('electron')

const parent = new BaseWindow()
const child = new BaseWindow({ parent, modal: true })
```

## Platform notices

* On macOS modal windows will be displayed as sheets attached to the parent window.
* On macOS the child windows will keep the relative position to parent window
  when parent window moves, while on Windows and Linux child windows will not
  move.
* On Linux the type of modal windows will be changed to `dialog`.
* On Linux many desktop environments do not support hiding a modal window.

## Resource management

When you add a [`WebContentsView`](web-contents-view.md) to a `BaseWindow` and the `BaseWindow`
is closed, the [`webContents`](web-contents.md) of the `WebContentsView` are not destroyed
automatically.

It is your responsibility to close the `webContents` when you no longer need them, e.g. when
the `BaseWindow` is closed:

```js
const { BaseWindow, WebContentsView } = require('electron')

const win = new BaseWindow({ width: 800, height: 600 })

const view = new WebContentsView()
win.contentView.addChildView(view)

win.on('closed', () => {
  view.webContents.close()
})
```

Unlike with a [`BrowserWindow`](browser-window.md), if you don't explicitly close the
`webContents`, you'll encounter memory leaks.

## Class: BaseWindow

> Create and control windows.

Process: [Main](../glossary.md#main-process)

`BaseWindow` is an [EventEmitter][event-emitter].

It creates a new `BaseWindow` with native properties as set by the `options`.

### `new BaseWindow([options])`

* `options` [BaseWindowConstructorOptions](structures/base-window-options.md?inline) (optional)

### Instance Events

Objects created with `new BaseWindow` emit the following events:

**Note:** Some events are only available on specific operating systems and are
labeled as such.

#### Event: 'close'

Returns:

* `event` Event

Emitted when the window is going to be closed. It's emitted before the
`beforeunload` and `unload` event of the DOM. Calling `event.preventDefault()`
will cancel the close.

Usually you would want to use the `beforeunload` handler to decide whether the
window should be closed, which will also be called when the window is
reloaded. In Electron, returning any value other than `undefined` would cancel the
close. For example:

```js
window.onbeforeunload = (e) => {
  console.log('I do not want to be closed')

  // Unlike usual browsers that a message box will be prompted to users, returning
  // a non-void value will silently cancel the close.
  // It is recommended to use the dialog API to let the user confirm closing the
  // application.
  e.returnValue = false
}
```

_**Note**: There is a subtle difference between the behaviors of `window.onbeforeunload = handler` and `window.addEventListener('beforeunload', handler)`. It is recommended to always set the `event.returnValue` explicitly, instead of only returning a value, as the former works more consistently within Electron._

#### Event: 'closed'

Emitted when the window is closed. After you have received this event you should
remove the reference to the window and avoid using it any more.

#### Event: 'query-session-end' _Windows_

Returns:

* `event` [WindowSessionEndEvent][window-session-end-event]

Emitted when a session is about to end due to a shutdown, machine restart, or user log-off.
Calling `event.preventDefault()` can delay the system shutdown, though it’s generally best
to respect the user’s choice to end the session. However, you may choose to use it if
ending the session puts the user at risk of losing data.

#### Event: 'session-end' _Windows_

Returns:

* `event` [WindowSessionEndEvent][window-session-end-event]

Emitted when a session is about to end due to a shutdown, machine restart, or user log-off. Once this event fires, there is no way to prevent the session from ending.

#### Event: 'blur'

Returns:

* `event` Event

Emitted when the window loses focus.

#### Event: 'focus'

Returns:

* `event` Event

Emitted when the window gains focus.

#### Event: 'show'

Emitted when the window is shown.

#### Event: 'hide'

Emitted when the window is hidden.

#### Event: 'maximize'

Emitted when window is maximized.

#### Event: 'unmaximize'

Emitted when the window exits from a maximized state.

#### Event: 'minimize'

Emitted when the window is minimized.

#### Event: 'restore'

Emitted when the window is restored from a minimized state.

#### Event: 'will-resize' _macOS_ _Windows_

Returns:

* `event` Event
* `newBounds` [Rectangle](structures/rectangle.md) - Size the window is being resized to.
* `details` Object
  * `edge` (string) - The edge of the window being dragged for resizing. Can be `bottom`, `left`, `right`, `top-left`, `top-right`, `bottom-left` or `bottom-right`.

Emitted before the window is resized. Calling `event.preventDefault()` will prevent the window from being resized.

Note that this is only emitted when the window is being resized manually. Resizing the window with `setBounds`/`setSize` will not emit this event.

The possible values and behaviors of the `edge` option are platform dependent. Possible values are:

* On Windows, possible values are `bottom`, `top`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, `bottom-right`.
* On macOS, possible values are `bottom` and `right`.
  * The value `bottom` is used to denote vertical resizing.
  * The value `right` is used to denote horizontal resizing.

#### Event: 'resize'

Emitted after the window has been resized.

#### Event: 'resized' _macOS_ _Windows_

Emitted once when the window has finished being resized.

This is usually emitted when the window has been resized manually. On macOS, resizing the window with `setBounds`/`setSize` and setting the `animate` parameter to `true` will also emit this event once resizing has finished.

#### Event: 'will-move' _macOS_ _Windows_

Returns:

* `event` Event
* `newBounds` [Rectangle](structures/rectangle.md) - Location the window is being moved to.

Emitted before the window is moved. On Windows, calling `event.preventDefault()` will prevent the window from being moved.

Note that this is only emitted when the window is being moved manually. Moving the window with `setPosition`/`setBounds`/`center` will not emit this event.

#### Event: 'move'

Emitted when the window is being moved to a new position.

#### Event: 'moved' _macOS_ _Windows_

Emitted once when the window is moved to a new position.

**Note**: On macOS this event is an alias of `move`.

#### Event: 'enter-full-screen'

Emitted when the window enters a full-screen state.

#### Event: 'leave-full-screen'

Emitted when the window leaves a full-screen state.

#### Event: 'always-on-top-changed'

Returns:

* `event` Event
* `isAlwaysOnTop` boolean

Emitted when the window is set or unset to show always on top of other windows.

#### Event: 'app-command' _Windows_ _Linux_

Returns:

* `event` Event
* `command` string

Emitted when an [App Command](https://learn.microsoft.com/en-us/windows/win32/inputdev/wm-appcommand)
is invoked. These are typically related to keyboard media keys or browser
commands, as well as the "Back" button built into some mice on Windows.

Commands are lowercased, underscores are replaced with hyphens, and the
`APPCOMMAND_` prefix is stripped off.
e.g. `APPCOMMAND_BROWSER_BACKWARD` is emitted as `browser-backward`.

```js
const { BaseWindow } = require('electron')
const win = new BaseWindow()
win.on('app-command', (e, cmd) => {
  // Navigate the window back when the user hits their mouse back button
  if (cmd === 'browser-backward') {
    // Find the appropriate WebContents to navigate.
  }
})
```

The following app commands are explicitly supported on Linux:

* `browser-backward`
* `browser-forward`

#### Event: 'swipe' _macOS_

Returns:

* `event` Event
* `direction` string

Emitted on 3-finger swipe. Possible directions are `up`, `right`, `down`, `left`.

The method underlying this event is built to handle older macOS-style trackpad swiping,
where the content on the screen doesn't move with the swipe. Most macOS trackpads are not
configured to allow this kind of swiping anymore, so in order for it to emit properly the
'Swipe between pages' preference in `System Preferences > Trackpad > More Gestures` must be
set to 'Swipe with two or three fingers'.

#### Event: 'rotate-gesture' _macOS_

Returns:

* `event` Event
* `rotation` Float

Emitted on trackpad rotation gesture. Continually emitted until rotation gesture is
ended. The `rotation` value on each emission is the angle in degrees rotated since
the last emission. The last emitted event upon a rotation gesture will always be of
value `0`. Counter-clockwise rotation values are positive, while clockwise ones are
negative.

#### Event: 'sheet-begin' _macOS_

Emitted when the window opens a sheet.

#### Event: 'sheet-end' _macOS_

Emitted when the window has closed a sheet.

#### Event: 'new-window-for-tab' _macOS_

Emitted when the native new tab button is clicked.

#### Event: 'system-context-menu' _Windows_ _Linux_

Returns:

* `event` Event
* `point` [Point](structures/point.md) - The screen coordinates where the context menu was triggered.

Emitted when the system context menu is triggered on the window, this is
normally only triggered when the user right clicks on the non-client area
of your window.  This is the window titlebar or any area you have declared
as `-webkit-app-region: drag` in a frameless window.

Calling `event.preventDefault()` will prevent the menu from being displayed.

To convert `point` to DIP, use [`screen.screenToDipPoint(point)`](./screen.md#screenscreentodippointpoint-windows-linux).

### Static Methods

The `BaseWindow` class has the following static methods:

#### `BaseWindow.getAllWindows()`

Returns `BaseWindow[]` - An array of all opened browser windows.

#### `BaseWindow.getFocusedWindow()`

Returns `BaseWindow | null` - The window that is focused in this application, otherwise returns `null`.

#### `BaseWindow.fromId(id)`

* `id` Integer

Returns `BaseWindow | null` - The window with the given `id`.

### Instance Properties

Objects created with `new BaseWindow` have the following properties:

```js
const { BaseWindow } = require('electron')
// In this example `win` is our instance
const win = new BaseWindow({ width: 800, height: 600 })
```

#### `win.id` _Readonly_

A `Integer` property representing the unique ID of the window. Each ID is unique among all `BaseWindow` instances of the entire Electron application.

#### `win.contentView`

A `View` property for the content view of the window.

#### `win.tabbingIdentifier` _macOS_ _Readonly_

A `string` (optional) property that is equal to the `tabbingIdentifier` passed to the `BrowserWindow` constructor or `undefined` if none was set.

#### `win.autoHideMenuBar` _Linux_ _Windows_

A `boolean` property that determines whether the window menu bar should hide itself automatically. Once set, the menu bar will only show when users press the single `Alt` key.

If the menu bar is already visible, setting this property to `true` won't
hide it immediately.

#### `win.simpleFullScreen`

A `boolean` property that determines whether the window is in simple (pre-Lion) fullscreen mode.

#### `win.fullScreen`

A `boolean` property that determines whether the window is in fullscreen mode.

#### `win.focusable` _Windows_ _macOS_

A `boolean` property that determines whether the window is focusable.

#### `win.visibleOnAllWorkspaces` _macOS_ _Linux_

A `boolean` property that determines whether the window is visible on all workspaces.

**Note:** Always returns false on Windows.

#### `win.shadow`

A `boolean` property that determines whether the window has a shadow.

#### `win.menuBarVisible` _Windows_ _Linux_

A `boolean` property that determines whether the menu bar should be visible.

**Note:** If the menu bar is auto-hide, users can still bring up the menu bar by pressing the single `Alt` key.

#### `win.kiosk`

A `boolean` property that determines whether the window is in kiosk mode.

#### `win.documentEdited` _macOS_

A `boolean` property that specifies whether the window’s document has been edited.

The icon in title bar will become gray when set to `true`.

#### `win.representedFilename` _macOS_

A `string` property that determines the pathname of the file the window represents,
and the icon of the file will show in window's title bar.

#### `win.title`

A `string` property that determines the title of the native window.

**Note:** The title of the web page can be different from the title of the native window.

#### `win.minimizable` _macOS_ _Windows_

A `boolean` property that determines whether the window can be manually minimized by user.

On Linux the setter is a no-op, although the getter returns `true`.

#### `win.maximizable` _macOS_ _Windows_

A `boolean` property that determines whether the window can be manually maximized by user.

On Linux the setter is a no-op, although the getter returns `true`.

#### `win.fullScreenable`

A `boolean` property that determines whether the maximize/zoom window button toggles fullscreen mode or
maximizes the window.

#### `win.resizable`

A `boolean` property that determines whether the window can be manually resized by user.

#### `win.closable` _macOS_ _Windows_

A `boolean` property that determines whether the window can be manually closed by user.

On Linux the setter is a no-op, although the getter returns `true`.

#### `win.movable` _macOS_ _Windows_

A `boolean` property that determines Whether the window can be moved by user.

On Linux the setter is a no-op, although the getter returns `true`.

#### `win.excludedFromShownWindowsMenu` _macOS_

A `boolean` property that determines whether the window is excluded from the application’s Windows menu. `false` by default.

```js @ts-expect-error=[12]
const { Menu, BaseWindow } = require('electron')
const win = new BaseWindow({ height: 600, width: 600 })

const template = [
  {
    role: 'windowmenu'
  }
]

win.excludedFromShownWindowsMenu = true

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
```

#### `win.accessibleTitle`

A `string` property that defines an alternative title provided only to
accessibility tools such as screen readers. This string is not directly
visible to users.

#### `win.snapped` _Windows_ _Readonly_

A `boolean` property that indicates whether the window is arranged via [Snap.](https://support.microsoft.com/en-us/windows/snap-your-windows-885a9b1e-a983-a3b1-16cd-c531795e6241)

### Instance Methods

Objects created with `new BaseWindow` have the following instance methods:

**Note:** Some methods are only available on specific operating systems and are
labeled as such.

#### `win.setContentView(view)`

* `view` [View](view.md)

Sets the content view of the window.

#### `win.getContentView()`

Returns [`View`](view.md) - The content view of the window.

#### `win.destroy()`

Force closing the window, the `unload` and `beforeunload` event won't be emitted
for the web page, and `close` event will also not be emitted
for this window, but it guarantees the `closed` event will be emitted.

#### `win.close()`

Try to close the window. This has the same effect as a user manually clicking
the close button of the window. The web page may cancel the close though. See
the [close event](#event-close).

#### `win.focus()`

Focuses on the window.

#### `win.blur()`

Removes focus from the window.

#### `win.isFocused()`

Returns `boolean` - Whether the window is focused.

#### `win.isDestroyed()`

Returns `boolean` - Whether the window is destroyed.

#### `win.show()`

Shows and gives focus to the window.

#### `win.showInactive()`

Shows the window but doesn't focus on it.

#### `win.hide()`

Hides the window.

#### `win.isVisible()`

Returns `boolean` - Whether the window is visible to the user in the foreground of the app.

#### `win.isModal()`

Returns `boolean` - Whether current window is a modal window.

#### `win.maximize()`

Maximizes the window. This will also show (but not focus) the window if it
isn't being displayed already.

#### `win.unmaximize()`

Unmaximizes the window.

#### `win.isMaximized()`

Returns `boolean` - Whether the window is maximized.

#### `win.minimize()`

Minimizes the window. On some platforms the minimized window will be shown in
the Dock.

#### `win.restore()`

Restores the window from minimized state to its previous state.

#### `win.isMinimized()`

Returns `boolean` - Whether the window is minimized.

#### `win.setFullScreen(flag)`

* `flag` boolean

Sets whether the window should be in fullscreen mode.

**Note:** On macOS, fullscreen transitions take place asynchronously. If further actions depend on the fullscreen state, use the ['enter-full-screen'](base-window.md#event-enter-full-screen) or ['leave-full-screen'](base-window.md#event-leave-full-screen) events.

#### `win.isFullScreen()`

Returns `boolean` - Whether the window is in fullscreen mode.

#### `win.setSimpleFullScreen(flag)` _macOS_

* `flag` boolean

Enters or leaves simple fullscreen mode.

Simple fullscreen mode emulates the native fullscreen behavior found in versions of macOS prior to Lion (10.7).

#### `win.isSimpleFullScreen()` _macOS_

Returns `boolean` - Whether the window is in simple (pre-Lion) fullscreen mode.

#### `win.isNormal()`

Returns `boolean` - Whether the window is in normal state (not maximized, not minimized, not in fullscreen mode).

#### `win.setAspectRatio(aspectRatio[, extraSize])`

* `aspectRatio` Float - The aspect ratio to maintain for some portion of the
content view.
* `extraSize` [Size](structures/size.md) (optional) _macOS_ - The extra size not to be included while
maintaining the aspect ratio.

This will make a window maintain an aspect ratio. The extra size allows a
developer to have space, specified in pixels, not included within the aspect
ratio calculations. This API already takes into account the difference between a
window's size and its content size.

Consider a normal window with an HD video player and associated controls.
Perhaps there are 15 pixels of controls on the left edge, 25 pixels of controls
on the right edge and 50 pixels of controls below the player. In order to
maintain a 16:9 aspect ratio (standard aspect ratio for HD @1920x1080) within
the player itself we would call this function with arguments of 16/9 and
\{ width: 40, height: 50 \}. The second argument doesn't care where the extra width and height
are within the content view--only that they exist. Sum any extra width and
height areas you have within the overall content view.

The aspect ratio is not respected when window is resized programmatically with
APIs like `win.setSize`.

To reset an aspect ratio, pass 0 as the `aspectRatio` value: `win.setAspectRatio(0)`.

#### `win.setBackgroundColor(backgroundColor)`

* `backgroundColor` string - Color in Hex, RGB, RGBA, HSL, HSLA or named CSS color format. The alpha channel is optional for the hex type.

Examples of valid `backgroundColor` values:

* Hex
  * #fff (shorthand RGB)
  * #ffff (shorthand ARGB)
  * #ffffff (RGB)
  * #ffffffff (ARGB)
* RGB
  * `rgb\(([\d]+),\s*([\d]+),\s*([\d]+)\)`
    * e.g. rgb(255, 255, 255)
* RGBA
  * `rgba\(([\d]+),\s*([\d]+),\s*([\d]+),\s*([\d.]+)\)`
    * e.g. rgba(255, 255, 255, 1.0)
* HSL
  * `hsl\((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)`
    * e.g. hsl(200, 20%, 50%)
* HSLA
  * `hsla\((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)`
    * e.g. hsla(200, 20%, 50%, 0.5)
* Color name
  * Options are listed in [SkParseColor.cpp](https://source.chromium.org/chromium/chromium/src/+/main:third_party/skia/src/utils/SkParseColor.cpp;l=11-152;drc=eea4bf52cb0d55e2a39c828b017c80a5ee054148)
  * Similar to CSS Color Module Level 3 keywords, but case-sensitive.
    * e.g. `blueviolet` or `red`

Sets the background color of the window. See [Setting `backgroundColor`](browser-window.md#setting-the-backgroundcolor-property).

#### `win.previewFile(path[, displayName])` _macOS_

* `path` string - The absolute path to the file to preview with QuickLook. This
  is important as Quick Look uses the file name and file extension on the path
  to determine the content type of the file to open.
* `displayName` string (optional) - The name of the file to display on the
  Quick Look modal view. This is purely visual and does not affect the content
  type of the file. Defaults to `path`.

Uses [Quick Look][quick-look] to preview a file at a given path.

#### `win.closeFilePreview()` _macOS_

Closes the currently open [Quick Look][quick-look] panel.

#### `win.setBounds(bounds[, animate])`

* `bounds` Partial\<[Rectangle](structures/rectangle.md)\>
* `animate` boolean (optional) _macOS_

Resizes and moves the window to the supplied bounds. Any properties that are not supplied will default to their current values.

```js
const { BaseWindow } = require('electron')
const win = new BaseWindow()

// set all bounds properties
win.setBounds({ x: 440, y: 225, width: 800, height: 600 })

// set a single bounds property
win.setBounds({ width: 100 })

// { x: 440, y: 225, width: 100, height: 600 }
console.log(win.getBounds())
```

**Note:** On macOS, the y-coordinate value cannot be smaller than the [Tray](tray.md) height. The tray height has changed over time and depends on the operating system, but is between 20-40px. Passing a value lower than the tray height will result in a window that is flush to the tray.

#### `win.getBounds()`

Returns [`Rectangle`](structures/rectangle.md) - The `bounds` of the window as `Object`.

**Note:** On macOS, the y-coordinate value returned will be at minimum the [Tray](tray.md) height. For example, calling `win.setBounds({ x: 25, y: 20, width: 800, height: 600 })` with a tray height of 38 means that `win.getBounds()` will return `{ x: 25, y: 38, width: 800, height: 600 }`.

#### `win.getBackgroundColor()`

Returns `string` - Gets the background color of the window in Hex (`#RRGGBB`) format.

See [Setting `backgroundColor`](browser-window.md#setting-the-backgroundcolor-property).

**Note:** The alpha value is _not_ returned alongside the red, green, and blue values.

#### `win.setContentBounds(bounds[, animate])`

* `bounds` [Rectangle](structures/rectangle.md)
* `animate` boolean (optional) _macOS_

Resizes and moves the window's client area (e.g. the web page) to
the supplied bounds.

#### `win.getContentBounds()`

Returns [`Rectangle`](structures/rectangle.md) - The `bounds` of the window's client area as `Object`.

#### `win.getNormalBounds()`

Returns [`Rectangle`](structures/rectangle.md) - Contains the window bounds of the normal state

**Note:** whatever the current state of the window : maximized, minimized or in fullscreen, this function always returns the position and size of the window in normal state. In normal state, getBounds and getNormalBounds returns the same [`Rectangle`](structures/rectangle.md).

#### `win.setEnabled(enable)`

* `enable` boolean

Disable or enable the window.

#### `win.isEnabled()`

Returns `boolean` - whether the window is enabled.

#### `win.setSize(width, height[, animate])`

* `width` Integer
* `height` Integer
* `animate` boolean (optional) _macOS_

Resizes the window to `width` and `height`. If `width` or `height` are below any set minimum size constraints the window will snap to its minimum size.

#### `win.getSize()`

Returns `Integer[]` - Contains the window's width and height.

#### `win.setContentSize(width, height[, animate])`

* `width` Integer
* `height` Integer
* `animate` boolean (optional) _macOS_

Resizes the window's client area (e.g. the web page) to `width` and `height`.

#### `win.getContentSize()`

Returns `Integer[]` - Contains the window's client area's width and height.

#### `win.setMinimumSize(width, height)`

* `width` Integer
* `height` Integer

Sets the minimum size of window to `width` and `height`.

#### `win.getMinimumSize()`

Returns `Integer[]` - Contains the window's minimum width and height.

#### `win.setMaximumSize(width, height)`

* `width` Integer
* `height` Integer

Sets the maximum size of window to `width` and `height`.

#### `win.getMaximumSize()`

Returns `Integer[]` - Contains the window's maximum width and height.

#### `win.setResizable(resizable)`

* `resizable` boolean

Sets whether the window can be manually resized by the user.

#### `win.isResizable()`

Returns `boolean` - Whether the window can be manually resized by the user.

#### `win.setMovable(movable)` _macOS_ _Windows_

* `movable` boolean

Sets whether the window can be moved by user. On Linux does nothing.

#### `win.isMovable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be moved by user.

On Linux always returns `true`.

#### `win.setMinimizable(minimizable)` _macOS_ _Windows_

* `minimizable` boolean

Sets whether the window can be manually minimized by user. On Linux does nothing.

#### `win.isMinimizable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be manually minimized by the user.

On Linux always returns `true`.

#### `win.setMaximizable(maximizable)` _macOS_ _Windows_

* `maximizable` boolean

Sets whether the window can be manually maximized by user. On Linux does nothing.

#### `win.isMaximizable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be manually maximized by user.

On Linux always returns `true`.

#### `win.setFullScreenable(fullscreenable)`

* `fullscreenable` boolean

Sets whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.

#### `win.isFullScreenable()`

Returns `boolean` - Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.

#### `win.setClosable(closable)` _macOS_ _Windows_

* `closable` boolean

Sets whether the window can be manually closed by user. On Linux does nothing.

#### `win.isClosable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be manually closed by user.

On Linux always returns `true`.

#### `win.setHiddenInMissionControl(hidden)` _macOS_

* `hidden` boolean

Sets whether the window will be hidden when the user toggles into mission control.

#### `win.isHiddenInMissionControl()` _macOS_

Returns `boolean` - Whether the window will be hidden when the user toggles into mission control.

#### `win.setAlwaysOnTop(flag[, level][, relativeLevel])`

* `flag` boolean
* `level` string (optional) _macOS_ _Windows_ - Values include `normal`,
  `floating`, `torn-off-menu`, `modal-panel`, `main-menu`, `status`,
  `pop-up-menu`, `screen-saver`, and ~~`dock`~~ (Deprecated). The default is
  `floating` when `flag` is true. The `level` is reset to `normal` when the
  flag is false. Note that from `floating` to `status` included, the window is
  placed below the Dock on macOS and below the taskbar on Windows. From
  `pop-up-menu` to a higher it is shown above the Dock on macOS and above the
  taskbar on Windows. See the [macOS docs][window-levels] for more details.
* `relativeLevel` Integer (optional) _macOS_ - The number of layers higher to set
  this window relative to the given `level`. The default is `0`. Note that Apple
  discourages setting levels higher than 1 above `screen-saver`.

Sets whether the window should show always on top of other windows. After
setting this, the window is still a normal window, not a toolbox window which
can not be focused on.

#### `win.isAlwaysOnTop()`

Returns `boolean` - Whether the window is always on top of other windows.

#### `win.moveAbove(mediaSourceId)`

* `mediaSourceId` string - Window id in the format of DesktopCapturerSource's id. For example "window:1869:0".

Moves window above the source window in the sense of z-order. If the
`mediaSourceId` is not of type window or if the window does not exist then
this method throws an error.

#### `win.moveTop()`

Moves window to top(z-order) regardless of focus

#### `win.center()`

Moves window to the center of the screen.

#### `win.setPosition(x, y[, animate])`

* `x` Integer
* `y` Integer
* `animate` boolean (optional) _macOS_

Moves window to `x` and `y`.

#### `win.getPosition()`

Returns `Integer[]` - Contains the window's current position.

#### `win.setTitle(title)`

* `title` string

Changes the title of native window to `title`.

#### `win.getTitle()`

Returns `string` - The title of the native window.

**Note:** The title of the web page can be different from the title of the native
window.

#### `win.setSheetOffset(offsetY[, offsetX])` _macOS_

* `offsetY` Float
* `offsetX` Float (optional)

Changes the attachment point for sheets on macOS. By default, sheets are
attached just below the window frame, but you may want to display them beneath
a HTML-rendered toolbar. For example:

```js
const { BaseWindow } = require('electron')
const win = new BaseWindow()

const toolbarRect = document.getElementById('toolbar').getBoundingClientRect()
win.setSheetOffset(toolbarRect.height)
```

#### `win.flashFrame(flag)`

<!--
```YAML history
added:
  - pr-url: https://github.com/electron/electron/pull/35658
changes:
  - pr-url: https://github.com/electron/electron/pull/41391
    description: "`window.flashFrame(bool)` will flash dock icon continuously on macOS"
    breaking-changes-header: behavior-changed-windowflashframebool-will-flash-dock-icon-continuously-on-macos
```
-->

* `flag` boolean

Starts or stops flashing the window to attract user's attention.

#### `win.setSkipTaskbar(skip)` _macOS_ _Windows_

* `skip` boolean

Makes the window not show in the taskbar.

#### `win.setKiosk(flag)`

* `flag` boolean

Enters or leaves kiosk mode.

#### `win.isKiosk()`

Returns `boolean` - Whether the window is in kiosk mode.

#### `win.isTabletMode()` _Windows_

Returns `boolean` - Whether the window is in Windows 10 tablet mode.

Since Windows 10 users can [use their PC as tablet](https://support.microsoft.com/en-us/help/17210/windows-10-use-your-pc-like-a-tablet),
under this mode apps can choose to optimize their UI for tablets, such as
enlarging the titlebar and hiding titlebar buttons.

This API returns whether the window is in tablet mode, and the `resize` event
can be be used to listen to changes to tablet mode.

#### `win.getMediaSourceId()`

Returns `string` - Window id in the format of DesktopCapturerSource's id. For example "window:1324:0".

More precisely the format is `window:id:other_id` where `id` is `HWND` on
Windows, `CGWindowID` (`uint64_t`) on macOS and `Window` (`unsigned long`) on
Linux. `other_id` is used to identify web contents (tabs) so within the same
top level window.

#### `win.getNativeWindowHandle()`

Returns `Buffer` - The platform-specific handle of the window.

The native type of the handle is `HWND` on Windows, `NSView*` on macOS, and
`Window` (`unsigned long`) on Linux.

#### `win.hookWindowMessage(message, callback)` _Windows_

* `message` Integer
* `callback` Function
  * `wParam` Buffer - The `wParam` provided to the WndProc
  * `lParam` Buffer - The `lParam` provided to the WndProc

Hooks a windows message. The `callback` is called when
the message is received in the WndProc.

#### `win.isWindowMessageHooked(message)` _Windows_

* `message` Integer

Returns `boolean` - `true` or `false` depending on whether the message is hooked.

#### `win.unhookWindowMessage(message)` _Windows_

* `message` Integer

Unhook the window message.

#### `win.unhookAllWindowMessages()` _Windows_

Unhooks all of the window messages.

#### `win.setRepresentedFilename(filename)` _macOS_

* `filename` string

Sets the pathname of the file the window represents, and the icon of the file
will show in window's title bar.

#### `win.getRepresentedFilename()` _macOS_

Returns `string` - The pathname of the file the window represents.

#### `win.setDocumentEdited(edited)` _macOS_

* `edited` boolean

Specifies whether the window’s document has been edited, and the icon in title
bar will become gray when set to `true`.

#### `win.isDocumentEdited()` _macOS_

Returns `boolean` - Whether the window's document has been edited.

#### `win.setMenu(menu)` _Linux_ _Windows_

* `menu` Menu | null

Sets the `menu` as the window's menu bar.

#### `win.removeMenu()` _Linux_ _Windows_

Remove the window's menu bar.

#### `win.setProgressBar(progress[, options])`

* `progress` Double
* `options` Object (optional)
  * `mode` string _Windows_ - Mode for the progress bar. Can be `none`, `normal`, `indeterminate`, `error` or `paused`.

Sets progress value in progress bar. Valid range is \[0, 1.0].

Remove progress bar when progress < 0;
Change to indeterminate mode when progress > 1.

On Linux platform, only supports Unity desktop environment, you need to specify
the `*.desktop` file name to `desktopName` field in `package.json`. By default,
it will assume `{app.name}.desktop`.

On Windows, a mode can be passed. Accepted values are `none`, `normal`,
`indeterminate`, `error`, and `paused`. If you call `setProgressBar` without a
mode set (but with a value within the valid range), `normal` will be assumed.

#### `win.setOverlayIcon(overlay, description)` _Windows_

* `overlay` [NativeImage](native-image.md) | null - the icon to display on the bottom
right corner of the taskbar icon. If this parameter is `null`, the overlay is
cleared
* `description` string - a description that will be provided to Accessibility
screen readers

Sets a 16 x 16 pixel overlay onto the current taskbar icon, usually used to
convey some sort of application status or to passively notify the user.

#### `win.invalidateShadow()` _macOS_

Invalidates the window shadow so that it is recomputed based on the current window shape.

`BaseWindow`s that are transparent can sometimes leave behind visual artifacts on macOS.
This method can be used to clear these artifacts when, for example, performing an animation.

#### `win.setHasShadow(hasShadow)`

* `hasShadow` boolean

Sets whether the window should have a shadow.

#### `win.hasShadow()`

Returns `boolean` - Whether the window has a shadow.

#### `win.setOpacity(opacity)` _Windows_ _macOS_

* `opacity` number - between 0.0 (fully transparent) and 1.0 (fully opaque)

Sets the opacity of the window. On Linux, does nothing. Out of bound number
values are clamped to the \[0, 1] range.

#### `win.getOpacity()`

Returns `number` - between 0.0 (fully transparent) and 1.0 (fully opaque). On
Linux, always returns 1.

#### `win.setShape(rects)` _Windows_ _Linux_ _Experimental_

* `rects` [Rectangle[]](structures/rectangle.md) - Sets a shape on the window.
  Passing an empty list reverts the window to being rectangular.

Setting a window shape determines the area within the window where the system
permits drawing and user interaction. Outside of the given region, no pixels
will be drawn and no mouse events will be registered. Mouse events outside of
the region will not be received by that window, but will fall through to
whatever is behind the window.

#### `win.setThumbarButtons(buttons)` _Windows_

* `buttons` [ThumbarButton[]](structures/thumbar-button.md)

Returns `boolean` - Whether the buttons were added successfully

Add a thumbnail toolbar with a specified set of buttons to the thumbnail image
of a window in a taskbar button layout. Returns a `boolean` object indicates
whether the thumbnail has been added successfully.

The number of buttons in thumbnail toolbar should be no greater than 7 due to
the limited room. Once you setup the thumbnail toolbar, the toolbar cannot be
removed due to the platform's limitation. But you can call the API with an empty
array to clean the buttons.

The `buttons` is an array of `Button` objects:

* `Button` Object
  * `icon` [NativeImage](native-image.md) - The icon showing in thumbnail
    toolbar.
  * `click` Function
  * `tooltip` string (optional) - The text of the button's tooltip.
  * `flags` string[] (optional) - Control specific states and behaviors of the
    button. By default, it is `['enabled']`.

The `flags` is an array that can include following `string`s:

* `enabled` - The button is active and available to the user.
* `disabled` - The button is disabled. It is present, but has a visual state
  indicating it will not respond to user action.
* `dismissonclick` - When the button is clicked, the thumbnail window closes
  immediately.
* `nobackground` - Do not draw a button border, use only the image.
* `hidden` - The button is not shown to the user.
* `noninteractive` - The button is enabled but not interactive; no pressed
  button state is drawn. This value is intended for instances where the button
  is used in a notification.

#### `win.setThumbnailClip(region)` _Windows_

* `region` [Rectangle](structures/rectangle.md) - Region of the window

Sets the region of the window to show as the thumbnail image displayed when
hovering over the window in the taskbar. You can reset the thumbnail to be
the entire window by specifying an empty region:
`{ x: 0, y: 0, width: 0, height: 0 }`.

#### `win.setThumbnailToolTip(toolTip)` _Windows_

* `toolTip` string

Sets the toolTip that is displayed when hovering over the window thumbnail
in the taskbar.

#### `win.setAppDetails(options)` _Windows_

* `options` Object
  * `appId` string (optional) - Window's [App User Model ID](https://learn.microsoft.com/en-us/windows/win32/shell/appids).
    It has to be set, otherwise the other options will have no effect.
  * `appIconPath` string (optional) - Window's [Relaunch Icon](https://learn.microsoft.com/en-us/windows/win32/properties/props-system-appusermodel-relaunchiconresource).
  * `appIconIndex` Integer (optional) - Index of the icon in `appIconPath`.
    Ignored when `appIconPath` is not set. Default is `0`.
  * `relaunchCommand` string (optional) - Window's [Relaunch Command](https://learn.microsoft.com/en-us/windows/win32/properties/props-system-appusermodel-relaunchcommand).
  * `relaunchDisplayName` string (optional) - Window's [Relaunch Display Name](https://learn.microsoft.com/en-us/windows/win32/properties/props-system-appusermodel-relaunchdisplaynameresource).

Sets the properties for the window's taskbar button.

**Note:** `relaunchCommand` and `relaunchDisplayName` must always be set
together. If one of those properties is not set, then neither will be used.

#### `win.setIcon(icon)` _Windows_ _Linux_

* `icon` [NativeImage](native-image.md) | string

Changes window icon.

#### `win.setWindowButtonVisibility(visible)` _macOS_

* `visible` boolean

Sets whether the window traffic light buttons should be visible.

#### `win.setAutoHideMenuBar(hide)` _Windows_ _Linux_

* `hide` boolean

Sets whether the window menu bar should hide itself automatically. Once set the
menu bar will only show when users press the single `Alt` key.

If the menu bar is already visible, calling `setAutoHideMenuBar(true)` won't hide it immediately.

#### `win.isMenuBarAutoHide()` _Windows_ _Linux_

Returns `boolean` - Whether menu bar automatically hides itself.

#### `win.setMenuBarVisibility(visible)` _Windows_ _Linux_

* `visible` boolean

Sets whether the menu bar should be visible. If the menu bar is auto-hide, users can still bring up the menu bar by pressing the single `Alt` key.

#### `win.isMenuBarVisible()` _Windows_ _Linux_

Returns `boolean` - Whether the menu bar is visible.

#### `win.isSnapped()` _Windows_

Returns `boolean` - whether the window is arranged via [Snap.](https://support.microsoft.com/en-us/windows/snap-your-windows-885a9b1e-a983-a3b1-16cd-c531795e6241)

The window is snapped via buttons shown when the mouse is hovered over window
maximize button, or by dragging it to the edges of the screen.

#### `win.setVisibleOnAllWorkspaces(visible[, options])` _macOS_ _Linux_

* `visible` boolean
* `options` Object (optional)
  * `visibleOnFullScreen` boolean (optional) _macOS_ - Sets whether
    the window should be visible above fullscreen windows.
  * `skipTransformProcessType` boolean (optional) _macOS_ - Calling
    setVisibleOnAllWorkspaces will by default transform the process
    type between UIElementApplication and ForegroundApplication to
    ensure the correct behavior. However, this will hide the window
    and dock for a short time every time it is called. If your window
    is already of type UIElementApplication, you can bypass this
    transformation by passing true to skipTransformProcessType.

Sets whether the window should be visible on all workspaces.

**Note:** This API does nothing on Windows.

#### `win.isVisibleOnAllWorkspaces()` _macOS_ _Linux_

Returns `boolean` - Whether the window is visible on all workspaces.

**Note:** This API always returns false on Windows.

#### `win.setIgnoreMouseEvents(ignore[, options])`

* `ignore` boolean
* `options` Object (optional)
  * `forward` boolean (optional) _macOS_ _Windows_ - If true, forwards mouse move
    messages to Chromium, enabling mouse related events such as `mouseleave`.
    Only used when `ignore` is true. If `ignore` is false, forwarding is always
    disabled regardless of this value.

Makes the window ignore all mouse events.

All mouse events happened in this window will be passed to the window below
this window, but if this window has focus, it will still receive keyboard
events.

#### `win.setContentProtection(enable)` _macOS_ _Windows_

* `enable` boolean

Prevents the window contents from being captured by other apps.

On macOS it sets the NSWindow's sharingType to NSWindowSharingNone.
On Windows it calls SetWindowDisplayAffinity with `WDA_EXCLUDEFROMCAPTURE`.
For Windows 10 version 2004 and up the window will be removed from capture entirely,
older Windows versions behave as if `WDA_MONITOR` is applied capturing a black window.

#### `win.setFocusable(focusable)` _macOS_ _Windows_

* `focusable` boolean

Changes whether the window can be focused.

On macOS it does not remove the focus from the window.

#### `win.isFocusable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be focused.

#### `win.setParentWindow(parent)`

* `parent` BaseWindow | null

Sets `parent` as current window's parent window, passing `null` will turn
current window into a top-level window.

#### `win.getParentWindow()`

Returns `BaseWindow | null` - The parent window or `null` if there is no parent.

#### `win.getChildWindows()`

Returns `BaseWindow[]` - All child windows.

#### `win.setAutoHideCursor(autoHide)` _macOS_

* `autoHide` boolean

Controls whether to hide cursor when typing.

#### `win.selectPreviousTab()` _macOS_

Selects the previous tab when native tabs are enabled and there are other
tabs in the window.

#### `win.selectNextTab()` _macOS_

Selects the next tab when native tabs are enabled and there are other
tabs in the window.

#### `win.showAllTabs()` _macOS_

Shows or hides the tab overview when native tabs are enabled.

#### `win.mergeAllWindows()` _macOS_

Merges all windows into one window with multiple tabs when native tabs
are enabled and there is more than one open window.

#### `win.moveTabToNewWindow()` _macOS_

Moves the current tab into a new window if native tabs are enabled and
there is more than one tab in the current window.

#### `win.toggleTabBar()` _macOS_

Toggles the visibility of the tab bar if native tabs are enabled and
there is only one tab in the current window.

#### `win.addTabbedWindow(baseWindow)` _macOS_

* `baseWindow` BaseWindow

Adds a window as a tab on this window, after the tab for the window instance.

#### `win.setVibrancy(type)` _macOS_

* `type` string | null - Can be `titlebar`, `selection`, `menu`, `popover`, `sidebar`, `header`, `sheet`, `window`, `hud`, `fullscreen-ui`, `tooltip`, `content`, `under-window`, or `under-page`. See
  the [macOS documentation][vibrancy-docs] for more details.

Adds a vibrancy effect to the window. Passing `null` or an empty string
will remove the vibrancy effect on the window.

#### `win.setBackgroundMaterial(material)` _Windows_

* `material` string
  * `auto` - Let the Desktop Window Manager (DWM) automatically decide the system-drawn backdrop material for this window. This is the default.
  * `none` - Don't draw any system backdrop.
  * `mica` - Draw the backdrop material effect corresponding to a long-lived window.
  * `acrylic` - Draw the backdrop material effect corresponding to a transient window.
  * `tabbed` - Draw the backdrop material effect corresponding to a window with a tabbed title bar.

This method sets the browser window's system-drawn background material, including behind the non-client area.

See the [Windows documentation](https://learn.microsoft.com/en-us/windows/win32/api/dwmapi/ne-dwmapi-dwm_systembackdrop_type) for more details.

**Note:** This method is only supported on Windows 11 22H2 and up.

#### `win.setWindowButtonPosition(position)` _macOS_

* `position` [Point](structures/point.md) | null

Set a custom position for the traffic light buttons in frameless window.
Passing `null` will reset the position to default.

#### `win.getWindowButtonPosition()` _macOS_

Returns `Point | null` - The custom position for the traffic light buttons in
frameless window, `null` will be returned when there is no custom position.

#### `win.setTouchBar(touchBar)` _macOS_

* `touchBar` TouchBar | null

Sets the touchBar layout for the current window. Specifying `null` or
`undefined` clears the touch bar. This method only has an effect if the
machine has a touch bar.

**Note:** The TouchBar API is currently experimental and may change or be
removed in future Electron releases.

#### `win.setTitleBarOverlay(options)` _Windows_ _Linux_

* `options` Object
  * `color` String (optional) - The CSS color of the Window Controls Overlay when enabled.
  * `symbolColor` String (optional) - The CSS color of the symbols on the Window Controls Overlay when enabled.
  * `height` Integer (optional) - The height of the title bar and Window Controls Overlay in pixels.

On a Window with Window Controls Overlay already enabled, this method updates the style of the title bar overlay.

On Linux, the `symbolColor` is automatically calculated to have minimum accessible contrast to the `color` if not explicitly set.

[quick-look]: https://en.wikipedia.org/wiki/Quick_Look
[vibrancy-docs]: https://developer.apple.com/documentation/appkit/nsvisualeffectview?preferredLanguage=objc
[window-levels]: https://developer.apple.com/documentation/appkit/nswindow/level
[event-emitter]: https://nodejs.org/api/events.html#events_class_eventemitter
[window-session-end-event]:../api/structures/window-session-end-event.md



================================================
FILE: docs/api/browser-view.md
================================================
# BrowserView

<!--
```YAML history
deprecated:
  - pr-url: https://github.com/electron/electron/pull/35658
    breaking-changes-header: deprecated-browserview
```
-->

> **Note**
> The `BrowserView` class is deprecated, and replaced by the new
> [`WebContentsView`](web-contents-view.md) class.

A `BrowserView` can be used to embed additional web content into a
[`BrowserWindow`](browser-window.md). It is like a child window, except that it is positioned
relative to its owning window. It is meant to be an alternative to the
`webview` tag.

## Class: BrowserView

<!--
```YAML history
deprecated:
  - pr-url: https://github.com/electron/electron/pull/35658
    breaking-changes-header: deprecated-browserview
```
-->

> Create and control views.

> **Note**
> The `BrowserView` class is deprecated, and replaced by the new
> [`WebContentsView`](web-contents-view.md) class.

Process: [Main](../glossary.md#main-process)

This module cannot be used until the `ready` event of the `app`
module is emitted.

### Example

```js
// In the main process.
const { app, BrowserView, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 })

  const view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  view.webContents.loadURL('https://electronjs.org')
})
```

### `new BrowserView([options])` _Experimental_ _Deprecated_

<!--
```YAML history
deprecated:
  - pr-url: https://github.com/electron/electron/pull/35658
    breaking-changes-header: deprecated-browserview
```
-->

* `options` Object (optional)
  * `webPreferences` [WebPreferences](structures/web-preferences.md?inline) (optional) - Settings of web page's features.

### Instance Properties

Objects created with `new BrowserView` have the following properties:

#### `view.webContents` _Experimental_ _Deprecated_

<!--
```YAML history
deprecated:
  - pr-url: https://github.com/electron/electron/pull/35658
    breaking-changes-header: deprecated-browserview
```
-->

A [`WebContents`](web-contents.md) object owned by this view.

### Instance Methods

Objects created with `new BrowserView` have the following instance methods:

#### `view.setAutoResize(options)` _Experimental_ _Deprecated_

<!--
```YAML history
changes:
  - pr-url: https://github.com/electron/electron/pull/35658
    description: "Standardized auto-resizing behavior across all platforms"
    breaking-changes-header: behavior-changed-browserviewsetautoresize-behavior-on-macos
deprecated:
  - pr-url: https://github.com/electron/electron/pull/35658
    breaking-changes-header: deprecated-browserview
```
-->

* `options` Object
  * `width` boolean (optional) - If `true`, the view's width will grow and shrink together
    with the window. `false` by default.
  * `height` boolean (optional) - If `true`, the view's height will grow and shrink
    together with the window. `false` by default.
  * `horizontal` boolean (optional) - If `true`, the view's x position and width will grow
    and shrink proportionally with the window. `false` by default.
  * `vertical` boolean (optional) - If `true`, the view's y position and height will grow
    and shrink proportionally with the window. `false` by default.

#### `view.setBounds(bounds)` _Experimental_ _Deprecated_

<!--
```YAML history
deprecated:
  - pr-url: https://github.com/electron/electron/pull/35658
    breaking-changes-header: deprecated-browserview
```
-->

* `bounds` [Rectangle](structures/rectangle.md)

Resizes and moves the view to the supplied bounds relative to the window.

#### `view.getBounds()` _Experimental_ _Deprecated_

<!--
```YAML history
deprecated:
  - pr-url: https://github.com/electron/electron/pull/35658
    breaking-changes-header: deprecated-browserview
```
-->

Returns [`Rectangle`](structures/rectangle.md)

The `bounds` of this BrowserView instance as `Object`.

#### `view.setBackgroundColor(color)` _Experimental_ _Deprecated_

<!--
```YAML history
deprecated:
  - pr-url: https://github.com/electron/electron/pull/35658
    breaking-changes-header: deprecated-browserview
```
-->

* `color` string - Color in Hex, RGB, ARGB, HSL, HSLA or named CSS color format. The alpha channel is
  optional for the hex type.

Examples of valid `color` values:

* Hex
  * `#fff` (RGB)
  * `#ffff` (ARGB)
  * `#ffffff` (RRGGBB)
  * `#ffffffff` (AARRGGBB)
* RGB
  * `rgb\(([\d]+),\s*([\d]+),\s*([\d]+)\)`
    * e.g. `rgb(255, 255, 255)`
* RGBA
  * `rgba\(([\d]+),\s*([\d]+),\s*([\d]+),\s*([\d.]+)\)`
    * e.g. `rgba(255, 255, 255, 1.0)`
* HSL
  * `hsl\((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)`
    * e.g. `hsl(200, 20%, 50%)`
* HSLA
  * `hsla\((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)`
    * e.g. `hsla(200, 20%, 50%, 0.5)`
* Color name
  * Options are listed in [SkParseColor.cpp](https://source.chromium.org/chromium/chromium/src/+/main:third_party/skia/src/utils/SkParseColor.cpp;l=11-152;drc=eea4bf52cb0d55e2a39c828b017c80a5ee054148)
  * Similar to CSS Color Module Level 3 keywords, but case-sensitive.
    * e.g. `blueviolet` or `red`

**Note:** Hex format with alpha takes `AARRGGBB` or `ARGB`, _not_ `RRGGBBAA` or `RGB`.



================================================
FILE: docs/api/browser-window.md
================================================
# BrowserWindow

> Create and control browser windows.

Process: [Main](../glossary.md#main-process)

This module cannot be used until the `ready` event of the `app`
module is emitted.

```js
// In the main process.
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 600 })

// Load a remote URL
win.loadURL('https://github.com')

// Or load a local HTML file
win.loadFile('index.html')
```

## Window customization

The `BrowserWindow` class exposes various ways to modify the look and behavior of
your app's windows. For more details, see the [Window Customization](../tutorial/window-customization.md)
tutorial.

## Showing the window gracefully

When loading a page in the window directly, users may see the page load incrementally,
which is not a good experience for a native app. To make the window display
without a visual flash, there are two solutions for different situations.

### Using the `ready-to-show` event

While loading the page, the `ready-to-show` event will be emitted when the renderer
process has rendered the page for the first time if the window has not been shown yet. Showing
the window after this event will have no visual flash:

```js
const { BrowserWindow } = require('electron')
const win = new BrowserWindow({ show: false })
win.once('ready-to-show', () => {
  win.show()
})
```

This event is usually emitted after the `did-finish-load` event, but for
pages with many remote resources, it may be emitted before the `did-finish-load`
event.

Please note that using this event implies that the renderer will be considered "visible" and
paint even though `show` is false.  This event will never fire if you use `paintWhenInitiallyHidden: false`

### Setting the `backgroundColor` property

For a complex app, the `ready-to-show` event could be emitted too late, making
the app feel slow. In this case, it is recommended to show the window
immediately, and use a `backgroundColor` close to your app's background:

```js
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ backgroundColor: '#2e2c29' })
win.loadURL('https://github.com')
```

Note that even for apps that use `ready-to-show` event, it is still recommended
to set `backgroundColor` to make the app feel more native.

Some examples of valid `backgroundColor` values include:

```js
const win = new BrowserWindow()
win.setBackgroundColor('hsl(230, 100%, 50%)')
win.setBackgroundColor('rgb(255, 145, 145)')
win.setBackgroundColor('#ff00a3')
win.setBackgroundColor('blueviolet')
```

For more information about these color types see valid options in [win.setBackgroundColor](browser-window.md#winsetbackgroundcolorbackgroundcolor).

## Parent and child windows

By using `parent` option, you can create child windows:

```js
const { BrowserWindow } = require('electron')

const top = new BrowserWindow()
const child = new BrowserWindow({ parent: top })
child.show()
top.show()
```

The `child` window will always show on top of the `top` window.

## Modal windows

A modal window is a child window that disables parent window. To create a modal
window, you have to set both the `parent` and `modal` options:

```js
const { BrowserWindow } = require('electron')

const top = new BrowserWindow()
const child = new BrowserWindow({ parent: top, modal: true, show: false })
child.loadURL('https://github.com')
child.once('ready-to-show', () => {
  child.show()
})
```

## Page visibility

The [Page Visibility API][page-visibility-api] works as follows:

* On all platforms, the visibility state tracks whether the window is
  hidden/minimized or not.
* Additionally, on macOS, the visibility state also tracks the window
  occlusion state. If the window is occluded (i.e. fully covered) by another
  window, the visibility state will be `hidden`. On other platforms, the
  visibility state will be `hidden` only when the window is minimized or
  explicitly hidden with `win.hide()`.
* If a `BrowserWindow` is created with `show: false`, the initial visibility
  state will be `visible` despite the window actually being hidden.
* If `backgroundThrottling` is disabled, the visibility state will remain
  `visible` even if the window is minimized, occluded, or hidden.

It is recommended that you pause expensive operations when the visibility
state is `hidden` in order to minimize power consumption.

## Platform notices

* On macOS modal windows will be displayed as sheets attached to the parent window.
* On macOS the child windows will keep the relative position to parent window
  when parent window moves, while on Windows and Linux child windows will not
  move.
* On Linux the type of modal windows will be changed to `dialog`.
* On Linux many desktop environments do not support hiding a modal window.

## Class: BrowserWindow extends `BaseWindow`

> Create and control browser windows.

Process: [Main](../glossary.md#main-process)

`BrowserWindow` is an [EventEmitter][event-emitter].

It creates a new `BrowserWindow` with native properties as set by the `options`.

### `new BrowserWindow([options])`

* `options` [BrowserWindowConstructorOptions](structures/browser-window-options.md?inline) (optional)

### Instance Events

Objects created with `new BrowserWindow` emit the following events:

**Note:** Some events are only available on specific operating systems and are
labeled as such.

#### Event: 'page-title-updated'

Returns:

* `event` Event
* `title` string
* `explicitSet` boolean

Emitted when the document changed its title, calling `event.preventDefault()`
will prevent the native window's title from changing.
`explicitSet` is false when title is synthesized from file URL.

#### Event: 'close'

Returns:

* `event` Event

Emitted when the window is going to be closed. It's emitted before the
`beforeunload` and `unload` event of the DOM. Calling `event.preventDefault()`
will cancel the close.

Usually you would want to use the `beforeunload` handler to decide whether the
window should be closed, which will also be called when the window is
reloaded. In Electron, returning any value other than `undefined` would cancel the
close. For example:

```js
window.onbeforeunload = (e) => {
  console.log('I do not want to be closed')

  // Unlike usual browsers that a message box will be prompted to users, returning
  // a non-void value will silently cancel the close.
  // It is recommended to use the dialog API to let the user confirm closing the
  // application.
  e.returnValue = false
}
```

_**Note**: There is a subtle difference between the behaviors of `window.onbeforeunload = handler` and `window.addEventListener('beforeunload', handler)`. It is recommended to always set the `event.returnValue` explicitly, instead of only returning a value, as the former works more consistently within Electron._

#### Event: 'closed'

Emitted when the window is closed. After you have received this event you should
remove the reference to the window and avoid using it any more.

#### Event: 'query-session-end' _Windows_

Returns:

* `event` [WindowSessionEndEvent][window-session-end-event]

Emitted when a session is about to end due to a shutdown, machine restart, or user log-off.
Calling `event.preventDefault()` can delay the system shutdown, though it’s generally best
to respect the user’s choice to end the session. However, you may choose to use it if
ending the session puts the user at risk of losing data.

#### Event: 'session-end' _Windows_

Returns:

* `event` [WindowSessionEndEvent][window-session-end-event]

Emitted when a session is about to end due to a shutdown, machine restart, or user log-off. Once this event fires, there is no way to prevent the session from ending.

#### Event: 'unresponsive'

Emitted when the web page becomes unresponsive.

#### Event: 'responsive'

Emitted when the unresponsive web page becomes responsive again.

#### Event: 'blur'

Emitted when the window loses focus.

#### Event: 'focus'

Emitted when the window gains focus.

#### Event: 'show'

Emitted when the window is shown.

#### Event: 'hide'

Emitted when the window is hidden.

#### Event: 'ready-to-show'

Emitted when the web page has been rendered (while not being shown) and window can be displayed without
a visual flash.

Please note that using this event implies that the renderer will be considered "visible" and
paint even though `show` is false.  This event will never fire if you use `paintWhenInitiallyHidden: false`

#### Event: 'maximize'

Emitted when window is maximized.

#### Event: 'unmaximize'

Emitted when the window exits from a maximized state.

#### Event: 'minimize'

Emitted when the window is minimized.

#### Event: 'restore'

Emitted when the window is restored from a minimized state.

#### Event: 'will-resize' _macOS_ _Windows_

Returns:

* `event` Event
* `newBounds` [Rectangle](structures/rectangle.md) - Size the window is being resized to.
* `details` Object
  * `edge` (string) - The edge of the window being dragged for resizing. Can be `bottom`, `left`, `right`, `top-left`, `top-right`, `bottom-left` or `bottom-right`.

Emitted before the window is resized. Calling `event.preventDefault()` will prevent the window from being resized.

Note that this is only emitted when the window is being resized manually. Resizing the window with `setBounds`/`setSize` will not emit this event.

The possible values and behaviors of the `edge` option are platform dependent. Possible values are:

* On Windows, possible values are `bottom`, `top`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, `bottom-right`.
* On macOS, possible values are `bottom` and `right`.
  * The value `bottom` is used to denote vertical resizing.
  * The value `right` is used to denote horizontal resizing.

#### Event: 'resize'

Emitted after the window has been resized.

#### Event: 'resized' _macOS_ _Windows_

Emitted once when the window has finished being resized.

This is usually emitted when the window has been resized manually. On macOS, resizing the window with `setBounds`/`setSize` and setting the `animate` parameter to `true` will also emit this event once resizing has finished.

#### Event: 'will-move' _macOS_ _Windows_

Returns:

* `event` Event
* `newBounds` [Rectangle](structures/rectangle.md) - Location the window is being moved to.

Emitted before the window is moved. On Windows, calling `event.preventDefault()` will prevent the window from being moved.

Note that this is only emitted when the window is being moved manually. Moving the window with `setPosition`/`setBounds`/`center` will not emit this event.

#### Event: 'move'

Emitted when the window is being moved to a new position.

#### Event: 'moved' _macOS_ _Windows_

Emitted once when the window is moved to a new position.

**Note**: On macOS this event is an alias of `move`.

#### Event: 'enter-full-screen'

Emitted when the window enters a full-screen state.

#### Event: 'leave-full-screen'

Emitted when the window leaves a full-screen state.

#### Event: 'enter-html-full-screen'

Emitted when the window enters a full-screen state triggered by HTML API.

#### Event: 'leave-html-full-screen'

Emitted when the window leaves a full-screen state triggered by HTML API.

#### Event: 'always-on-top-changed'

Returns:

* `event` Event
* `isAlwaysOnTop` boolean

Emitted when the window is set or unset to show always on top of other windows.

#### Event: 'app-command' _Windows_ _Linux_

Returns:

* `event` Event
* `command` string

Emitted when an [App Command](https://learn.microsoft.com/en-us/windows/win32/inputdev/wm-appcommand)
is invoked. These are typically related to keyboard media keys or browser
commands, as well as the "Back" button built into some mice on Windows.

Commands are lowercased, underscores are replaced with hyphens, and the
`APPCOMMAND_` prefix is stripped off.
e.g. `APPCOMMAND_BROWSER_BACKWARD` is emitted as `browser-backward`.

```js
const { BrowserWindow } = require('electron')
const win = new BrowserWindow()
win.on('app-command', (e, cmd) => {
  // Navigate the window back when the user hits their mouse back button
  if (cmd === 'browser-backward' && win.webContents.canGoBack()) {
    win.webContents.goBack()
  }
})
```

The following app commands are explicitly supported on Linux:

* `browser-backward`
* `browser-forward`

#### Event: 'swipe' _macOS_

Returns:

* `event` Event
* `direction` string

Emitted on 3-finger swipe. Possible directions are `up`, `right`, `down`, `left`.

The method underlying this event is built to handle older macOS-style trackpad swiping,
where the content on the screen doesn't move with the swipe. Most macOS trackpads are not
configured to allow this kind of swiping anymore, so in order for it to emit properly the
'Swipe between pages' preference in `System Preferences > Trackpad > More Gestures` must be
set to 'Swipe with two or three fingers'.

#### Event: 'rotate-gesture' _macOS_

Returns:

* `event` Event
* `rotation` Float

Emitted on trackpad rotation gesture. Continually emitted until rotation gesture is
ended. The `rotation` value on each emission is the angle in degrees rotated since
the last emission. The last emitted event upon a rotation gesture will always be of
value `0`. Counter-clockwise rotation values are positive, while clockwise ones are
negative.

#### Event: 'sheet-begin' _macOS_

Emitted when the window opens a sheet.

#### Event: 'sheet-end' _macOS_

Emitted when the window has closed a sheet.

#### Event: 'new-window-for-tab' _macOS_

Emitted when the native new tab button is clicked.

#### Event: 'system-context-menu' _Windows_ _Linux_

Returns:

* `event` Event
* `point` [Point](structures/point.md) - The screen coordinates where the context menu was triggered.

Emitted when the system context menu is triggered on the window, this is
normally only triggered when the user right clicks on the non-client area
of your window.  This is the window titlebar or any area you have declared
as `-webkit-app-region: drag` in a frameless window.

Calling `event.preventDefault()` will prevent the menu from being displayed.

To convert `point` to DIP, use [`screen.screenToDipPoint(point)`](./screen.md#screenscreentodippointpoint-windows-linux).

### Static Methods

The `BrowserWindow` class has the following static methods:

#### `BrowserWindow.getAllWindows()`

Returns `BrowserWindow[]` - An array of all opened browser windows.

#### `BrowserWindow.getFocusedWindow()`

Returns `BrowserWindow | null` - The window that is focused in this application, otherwise returns `null`.

#### `BrowserWindow.fromWebContents(webContents)`

* `webContents` [WebContents](web-contents.md)

Returns `BrowserWindow | null` - The window that owns the given `webContents`
or `null` if the contents are not owned by a window.

#### `BrowserWindow.fromBrowserView(browserView)` _Deprecated_

* `browserView` [BrowserView](browser-view.md)

> **Note**
> The `BrowserView` class is deprecated, and replaced by the new
> [`WebContentsView`](web-contents-view.md) class.

Returns `BrowserWindow | null` - The window that owns the given `browserView`. If the given view is not attached to any window, returns `null`.

#### `BrowserWindow.fromId(id)`

* `id` Integer

Returns `BrowserWindow | null` - The window with the given `id`.

### Instance Properties

Objects created with `new BrowserWindow` have the following properties:

```js
const { BrowserWindow } = require('electron')
// In this example `win` is our instance
const win = new BrowserWindow({ width: 800, height: 600 })
win.loadURL('https://github.com')
```

#### `win.webContents` _Readonly_

A `WebContents` object this window owns. All web page related events and
operations will be done via it.

See the [`webContents` documentation](web-contents.md) for its methods and
events.

#### `win.id` _Readonly_

A `Integer` property representing the unique ID of the window. Each ID is unique among all `BrowserWindow` instances of the entire Electron application.

#### `win.tabbingIdentifier` _macOS_ _Readonly_

A `string` (optional) property that is equal to the `tabbingIdentifier` passed to the `BrowserWindow` constructor or `undefined` if none was set.

#### `win.autoHideMenuBar` _Linux_ _Windows_

A `boolean` property that determines whether the window menu bar should hide itself automatically. Once set, the menu bar will only show when users press the single `Alt` key.

If the menu bar is already visible, setting this property to `true` won't
hide it immediately.

#### `win.simpleFullScreen`

A `boolean` property that determines whether the window is in simple (pre-Lion) fullscreen mode.

#### `win.fullScreen`

A `boolean` property that determines whether the window is in fullscreen mode.

#### `win.focusable` _Windows_ _macOS_

A `boolean` property that determines whether the window is focusable.

#### `win.visibleOnAllWorkspaces` _macOS_ _Linux_

A `boolean` property that determines whether the window is visible on all workspaces.

**Note:** Always returns false on Windows.

#### `win.shadow`

A `boolean` property that determines whether the window has a shadow.

#### `win.menuBarVisible` _Windows_ _Linux_

A `boolean` property that determines whether the menu bar should be visible.

**Note:** If the menu bar is auto-hide, users can still bring up the menu bar by pressing the single `Alt` key.

#### `win.kiosk`

A `boolean` property that determines whether the window is in kiosk mode.

#### `win.documentEdited` _macOS_

A `boolean` property that specifies whether the window’s document has been edited.

The icon in title bar will become gray when set to `true`.

#### `win.representedFilename` _macOS_

A `string` property that determines the pathname of the file the window represents,
and the icon of the file will show in window's title bar.

#### `win.title`

A `string` property that determines the title of the native window.

**Note:** The title of the web page can be different from the title of the native window.

#### `win.minimizable` _macOS_ _Windows_

A `boolean` property that determines whether the window can be manually minimized by user.

On Linux the setter is a no-op, although the getter returns `true`.

#### `win.maximizable` _macOS_ _Windows_

A `boolean` property that determines whether the window can be manually maximized by user.

On Linux the setter is a no-op, although the getter returns `true`.

#### `win.fullScreenable`

A `boolean` property that determines whether the maximize/zoom window button toggles fullscreen mode or
maximizes the window.

#### `win.resizable`

A `boolean` property that determines whether the window can be manually resized by user.

#### `win.closable` _macOS_ _Windows_

A `boolean` property that determines whether the window can be manually closed by user.

On Linux the setter is a no-op, although the getter returns `true`.

#### `win.movable` _macOS_ _Windows_

A `boolean` property that determines Whether the window can be moved by user.

On Linux the setter is a no-op, although the getter returns `true`.

#### `win.excludedFromShownWindowsMenu` _macOS_

A `boolean` property that determines whether the window is excluded from the application’s Windows menu. `false` by default.

```js @ts-expect-error=[11]
const win = new BrowserWindow({ height: 600, width: 600 })

const template = [
  {
    role: 'windowmenu'
  }
]

win.excludedFromShownWindowsMenu = true

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
```

#### `win.accessibleTitle`

A `string` property that defines an alternative title provided only to
accessibility tools such as screen readers. This string is not directly
visible to users.

#### `win.snapped` _Windows_ _Readonly_

A `boolean` property that indicates whether the window is arranged via [Snap.](https://support.microsoft.com/en-us/windows/snap-your-windows-885a9b1e-a983-a3b1-16cd-c531795e6241)

### Instance Methods

Objects created with `new BrowserWindow` have the following instance methods:

**Note:** Some methods are only available on specific operating systems and are
labeled as such.

#### `win.destroy()`

Force closing the window, the `unload` and `beforeunload` event won't be emitted
for the web page, and `close` event will also not be emitted
for this window, but it guarantees the `closed` event will be emitted.

#### `win.close()`

Try to close the window. This has the same effect as a user manually clicking
the close button of the window. The web page may cancel the close though. See
the [close event](#event-close).

#### `win.focus()`

Focuses on the window.

#### `win.blur()`

Removes focus from the window.

#### `win.isFocused()`

Returns `boolean` - Whether the window is focused.

#### `win.isDestroyed()`

Returns `boolean` - Whether the window is destroyed.

#### `win.show()`

Shows and gives focus to the window.

#### `win.showInactive()`

Shows the window but doesn't focus on it.

#### `win.hide()`

Hides the window.

#### `win.isVisible()`

Returns `boolean` - Whether the window is visible to the user in the foreground of the app.

#### `win.isModal()`

Returns `boolean` - Whether current window is a modal window.

#### `win.maximize()`

Maximizes the window. This will also show (but not focus) the window if it
isn't being displayed already.

#### `win.unmaximize()`

Unmaximizes the window.

#### `win.isMaximized()`

Returns `boolean` - Whether the window is maximized.

#### `win.minimize()`

Minimizes the window. On some platforms the minimized window will be shown in
the Dock.

#### `win.restore()`

Restores the window from minimized state to its previous state.

#### `win.isMinimized()`

Returns `boolean` - Whether the window is minimized.

#### `win.setFullScreen(flag)`

* `flag` boolean

Sets whether the window should be in fullscreen mode.

**Note:** On macOS, fullscreen transitions take place asynchronously. If further actions depend on the fullscreen state, use the ['enter-full-screen'](browser-window.md#event-enter-full-screen) or ['leave-full-screen'](browser-window.md#event-leave-full-screen) events.

#### `win.isFullScreen()`

Returns `boolean` - Whether the window is in fullscreen mode.

**Note:** On macOS, fullscreen transitions take place asynchronously. When querying for a BrowserWindow's fullscreen status, you should ensure that either the ['enter-full-screen'](browser-window.md#event-enter-full-screen) or ['leave-full-screen'](browser-window.md#event-leave-full-screen) events have been emitted.

#### `win.setSimpleFullScreen(flag)` _macOS_

* `flag` boolean

Enters or leaves simple fullscreen mode.

Simple fullscreen mode emulates the native fullscreen behavior found in versions of macOS prior to Lion (10.7).

#### `win.isSimpleFullScreen()` _macOS_

Returns `boolean` - Whether the window is in simple (pre-Lion) fullscreen mode.

#### `win.isNormal()`

Returns `boolean` - Whether the window is in normal state (not maximized, not minimized, not in fullscreen mode).

#### `win.setAspectRatio(aspectRatio[, extraSize])`

* `aspectRatio` Float - The aspect ratio to maintain for some portion of the
content view.
* `extraSize` [Size](structures/size.md) (optional) _macOS_ - The extra size not to be included while
maintaining the aspect ratio.

This will make a window maintain an aspect ratio. The extra size allows a
developer to have space, specified in pixels, not included within the aspect
ratio calculations. This API already takes into account the difference between a
window's size and its content size.

Consider a normal window with an HD video player and associated controls.
Perhaps there are 15 pixels of controls on the left edge, 25 pixels of controls
on the right edge and 50 pixels of controls below the player. In order to
maintain a 16:9 aspect ratio (standard aspect ratio for HD @1920x1080) within
the player itself we would call this function with arguments of 16/9 and
\{ width: 40, height: 50 \}. The second argument doesn't care where the extra width and height
are within the content view--only that they exist. Sum any extra width and
height areas you have within the overall content view.

The aspect ratio is not respected when window is resized programmatically with
APIs like `win.setSize`.

To reset an aspect ratio, pass 0 as the `aspectRatio` value: `win.setAspectRatio(0)`.

#### `win.setBackgroundColor(backgroundColor)`

* `backgroundColor` string - Color in Hex, RGB, RGBA, HSL, HSLA or named CSS color format. The alpha channel is optional for the hex type.

Examples of valid `backgroundColor` values:

* Hex
  * #fff (shorthand RGB)
  * #ffff (shorthand ARGB)
  * #ffffff (RGB)
  * #ffffffff (ARGB)
* RGB
  * `rgb\(([\d]+),\s*([\d]+),\s*([\d]+)\)`
    * e.g. rgb(255, 255, 255)
* RGBA
  * `rgba\(([\d]+),\s*([\d]+),\s*([\d]+),\s*([\d.]+)\)`
    * e.g. rgba(255, 255, 255, 1.0)
* HSL
  * `hsl\((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)`
    * e.g. hsl(200, 20%, 50%)
* HSLA
  * `hsla\((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)`
    * e.g. hsla(200, 20%, 50%, 0.5)
* Color name
  * Options are listed in [SkParseColor.cpp](https://source.chromium.org/chromium/chromium/src/+/main:third_party/skia/src/utils/SkParseColor.cpp;l=11-152;drc=eea4bf52cb0d55e2a39c828b017c80a5ee054148)
  * Similar to CSS Color Module Level 3 keywords, but case-sensitive.
    * e.g. `blueviolet` or `red`

Sets the background color of the window. See [Setting `backgroundColor`](#setting-the-backgroundcolor-property).

#### `win.previewFile(path[, displayName])` _macOS_

* `path` string - The absolute path to the file to preview with QuickLook. This
  is important as Quick Look uses the file name and file extension on the path
  to determine the content type of the file to open.
* `displayName` string (optional) - The name of the file to display on the
  Quick Look modal view. This is purely visual and does not affect the content
  type of the file. Defaults to `path`.

Uses [Quick Look][quick-look] to preview a file at a given path.

#### `win.closeFilePreview()` _macOS_

Closes the currently open [Quick Look][quick-look] panel.

#### `win.setBounds(bounds[, animate])`

* `bounds` Partial\<[Rectangle](structures/rectangle.md)\>
* `animate` boolean (optional) _macOS_

Resizes and moves the window to the supplied bounds. Any properties that are not supplied will default to their current values.

```js
const { BrowserWindow } = require('electron')
const win = new BrowserWindow()

// set all bounds properties
win.setBounds({ x: 440, y: 225, width: 800, height: 600 })

// set a single bounds property
win.setBounds({ width: 100 })

// { x: 440, y: 225, width: 100, height: 600 }
console.log(win.getBounds())
```

**Note:** On macOS, the y-coordinate value cannot be smaller than the [Tray](tray.md) height. The tray height has changed over time and depends on the operating system, but is between 20-40px. Passing a value lower than the tray height will result in a window that is flush to the tray.

#### `win.getBounds()`

Returns [`Rectangle`](structures/rectangle.md) - The `bounds` of the window as `Object`.

**Note:** On macOS, the y-coordinate value returned will be at minimum the [Tray](tray.md) height. For example, calling `win.setBounds({ x: 25, y: 20, width: 800, height: 600 })` with a tray height of 38 means that `win.getBounds()` will return `{ x: 25, y: 38, width: 800, height: 600 }`.

#### `win.getBackgroundColor()`

Returns `string` - Gets the background color of the window in Hex (`#RRGGBB`) format.

See [Setting `backgroundColor`](#setting-the-backgroundcolor-property).

**Note:** The alpha value is _not_ returned alongside the red, green, and blue values.

#### `win.setContentBounds(bounds[, animate])`

* `bounds` [Rectangle](structures/rectangle.md)
* `animate` boolean (optional) _macOS_

Resizes and moves the window's client area (e.g. the web page) to
the supplied bounds.

#### `win.getContentBounds()`

Returns [`Rectangle`](structures/rectangle.md) - The `bounds` of the window's client area as `Object`.

#### `win.getNormalBounds()`

Returns [`Rectangle`](structures/rectangle.md) - Contains the window bounds of the normal state

**Note:** whatever the current state of the window : maximized, minimized or in fullscreen, this function always returns the position and size of the window in normal state. In normal state, getBounds and getNormalBounds returns the same [`Rectangle`](structures/rectangle.md).

#### `win.setEnabled(enable)`

* `enable` boolean

Disable or enable the window.

#### `win.isEnabled()`

Returns `boolean` - whether the window is enabled.

#### `win.setSize(width, height[, animate])`

* `width` Integer
* `height` Integer
* `animate` boolean (optional) _macOS_

Resizes the window to `width` and `height`. If `width` or `height` are below any set minimum size constraints the window will snap to its minimum size.

#### `win.getSize()`

Returns `Integer[]` - Contains the window's width and height.

#### `win.setContentSize(width, height[, animate])`

* `width` Integer
* `height` Integer
* `animate` boolean (optional) _macOS_

Resizes the window's client area (e.g. the web page) to `width` and `height`.

#### `win.getContentSize()`

Returns `Integer[]` - Contains the window's client area's width and height.

#### `win.setMinimumSize(width, height)`

* `width` Integer
* `height` Integer

Sets the minimum size of window to `width` and `height`.

#### `win.getMinimumSize()`

Returns `Integer[]` - Contains the window's minimum width and height.

#### `win.setMaximumSize(width, height)`

* `width` Integer
* `height` Integer

Sets the maximum size of window to `width` and `height`.

#### `win.getMaximumSize()`

Returns `Integer[]` - Contains the window's maximum width and height.

#### `win.setResizable(resizable)`

* `resizable` boolean

Sets whether the window can be manually resized by the user.

#### `win.isResizable()`

Returns `boolean` - Whether the window can be manually resized by the user.

#### `win.setMovable(movable)` _macOS_ _Windows_

* `movable` boolean

Sets whether the window can be moved by user. On Linux does nothing.

#### `win.isMovable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be moved by user.

On Linux always returns `true`.

#### `win.setMinimizable(minimizable)` _macOS_ _Windows_

* `minimizable` boolean

Sets whether the window can be manually minimized by user. On Linux does nothing.

#### `win.isMinimizable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be manually minimized by the user.

On Linux always returns `true`.

#### `win.setMaximizable(maximizable)` _macOS_ _Windows_

* `maximizable` boolean

Sets whether the window can be manually maximized by user. On Linux does nothing.

#### `win.isMaximizable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be manually maximized by user.

On Linux always returns `true`.

#### `win.setFullScreenable(fullscreenable)`

* `fullscreenable` boolean

Sets whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.

#### `win.isFullScreenable()`

Returns `boolean` - Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.

#### `win.setClosable(closable)` _macOS_ _Windows_

* `closable` boolean

Sets whether the window can be manually closed by user. On Linux does nothing.

#### `win.isClosable()` _macOS_ _Windows_

Returns `boolean` - Whether the window can be manually closed by user.

On Linux always returns `true`.

#### `win.setHiddenInMissionControl(hidden)` _macOS_

* `hidden` boolean

Sets whether the window will be hidden when the user toggles into mission control.

#### `win.isHiddenInMissionControl()` _macOS_

Returns `boolean` - Whether the window will be hidden when the user toggles into mission control.

#### `win.setAlwaysOnTop(flag[, level][, relativeLevel])`

* `flag` boolean
* `level` string (optional) _macOS_ _Windows_ - Values include `normal`,
  `floating`, `torn-off-menu`, `modal-panel`, `main-menu`, `status`,
  `pop-up-menu`, `screen-saver`, and ~~`dock`~~ (Deprecated). The default is
  `floating` when `flag` is true. The `level` is reset to `normal` when the
  flag is false. Note that from `floating` to `status` included, the window is
  placed below the Dock on macOS and below the taskbar on Windows. From
  `pop-up-menu` to a higher it is shown above the Dock on macOS and above the
  taskbar on Windows. See the [macOS docs][window-levels] for more details.
* `relativeLevel` Integer (optional) _macOS_ - The number of layers higher to set
  this window relative to the given `level`. The default is `0`. Note that Apple
  discourages setting levels higher than 1 above `screen-saver`.

Sets whether the window should show always on top of other windows. After
setting this, the window is still a normal window, not a toolbox window which
can not be focused on.

#### `win.isAlwaysOnTop()`

Returns `boolean` - Whether the window is always on top of other windows.

#### `win.moveAbove(mediaSourceId)`

* `mediaSourceId` string - Window id in the format of DesktopCapturerSource's id. For example "window:1869:0".

Moves window above the source window in the sense of z-order. If the
`mediaSourceId` is not of type window or if the window does not exist then
this method throws an error.

#### `win.moveTop()`

Moves window to top(z-order) regardless of focus

#### `win.center()`

Moves window to the center of the screen.

#### `win.setPosition(x, y[, animate])`

* `x` Integer
* `y` Integer
* `animate` boolean (optional) _macOS_

Moves window to `x` and `y`.

#### `win.getPosition()`

Returns `Integer[]` - Contains the window's current position.

#### `win.setTitle(title)`

* `title` string

Changes the title of native window to `title`.

#### `win.getTitle()`

Returns `string` - The title of the native window.

**Note:** The title of the web page can be different from the title of the native
window.

#### `win.setSheetOffset(offsetY[, offsetX])` _macOS_

* `offsetY` Float
* `offsetX` Float (optional)

Changes the attachment point for sheets on macOS. By default, sheets are
attached just below the window frame, but you may want to display them beneath
a HTML-rendered toolbar. For example:

```js
const { BrowserWindow } = require('electron')
const win = new BrowserWindow()

const toolbarRect = document.getElementById('toolbar').getBoundingClientRect()
win.setSheetOffset(toolbarRect.height)
```

#### `win.flashFrame(flag)`

<!--
```YAML history
changes:
  - pr-url: https://github.com/electron/electron/pull/41391
    description: "`window.flashFrame(bool)` will flash dock icon continuously on macOS"
    breaking-changes-header: behavior-changed-windowflashframebool-will-flash-dock-icon-continuously-on-macos
```
-->

* `flag` boolean

Starts or stops flashing the window to attract user's attention.

#### `win.setSkipTaskbar(skip)` _macOS_ _Windows_

* `skip` boolean

Makes the window not show in the taskbar.

#### `win.setKiosk(flag)`

* `flag` boolean

Enters or leaves kiosk mode.

#### `win.isKiosk()`

Returns `boolean` - Whether the window is in kiosk mode.

#### `win.isTabletMode()` _Windows_

Returns `boolean` - Whether the window is in Windows 10 tablet mode.

Since Windows 10 users can [use their PC as tablet](https://support.microsoft.com/en-us/help/17210/windows-10-use-your-pc-like-a-tablet),
under this mode apps can choose to optimize their UI for tablets, such as
enlarging the titlebar and hiding titlebar buttons.

This API returns whether the window is in tablet mode, and the `resize` event
can be be used to listen to changes to tablet mode.

#### `win.getMediaSourceId()`

Returns `string` - Window id in the format of DesktopCapturerSource's id. For example "window:1324:0".

More precisely the format is `window:id:other_id` where `id` is `HWND` on
Windows, `CGWindowID` (`uint64_t`) on macOS and `Window` (`unsigned long`) on
Linux. `other_id` is used to identify web contents (tabs) so within the same
top level window.

#### `win.getNativeWindowHandle()`

Returns `Buffer` - The platform-specific handle of the window.

The native type of the handle is `HWND` on Windows, `NSView*` on macOS, and
`Window` (`unsigned long`) on Linux.

#### `win.hookWindowMessage(message, callback)` _Windows_

* `message` Integer
* `callback` Function
  * `wParam` Buffer - The `wParam` provided to the WndProc
  * `lParam` Buffer - The `lParam` provided to the WndProc

Hooks a windows message. The `callback` is called when
the message is received in the WndProc.

#### `win.isWindowMessageHooked(message)` _Windows_

* `message` Integer

Returns `boolean` - `true` or `false` depending on whether the message is hooked.

#### `win.unhookWindowMessage(message)` _Windows_

* `message` Integer

Unhook the window message.

#### `win.unhookAllWindowMessages()` _Windows_

Unhooks all of the window messages.

#### `win.setRepresentedFilename(filename)` _macOS_

* `filename` string

Sets the pathname of the file the window represents, and the icon of the file
will show in window's title bar.

#### `win.getRepresentedFilename()` _macOS_

Returns `string` - The pathname of the file the window represents.

#### `win.setDocumentEdited(edited)` _macOS_

* `edited` boolean

Specifies whether the window’s document has been edited, and the icon in title
bar will become gray when set to `true`.

#### `win.isDocumentEdited()` _macOS_

Returns `boolean` - Whether the window's document has been edited.

#### `win.focusOnWebView()`

#### `win.blurWebView()`

#### `win.capturePage([rect, opts])`

* `rect` [Rectangle](structures/rectangle.md) (optional) - The bounds to capture
* `opts` Object (optional)
  * `stayHidden` boolean (optional) -  Keep the page hidden instead of visible. Default is `false`.
  * `stayAwake` bo