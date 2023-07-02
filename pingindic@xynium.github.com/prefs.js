/*
 * PingIndic by Xynium September 2022
 */
'use strict';
const {  Gio, Gtk ,GObject} = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Gettext = imports.gettext.domain('moonphases');
const _ = Gettext.gettext;

const UPDTEDLY="update-interval";
const ADDRESS='address';
const LIMIT1 = "limit-1";
const LIMIT2 = "limit-2";
const LIMIT3 = "limit-3";
const LIMIT4 = "limit-4";

function init() {
    ExtensionUtils.initTranslations('moonphases');
}

function buildPrefsWidget () {
        let settings = ExtensionUtils.getSettings('org.gnome.shell.extensions.pingindic');
        let builder = new Gtk.Builder();
        builder.set_translation_domain('PingIndic');
        builder.add_from_file(Me.path + '/prefs.ui');

        // Update interval.
        let widget0= builder.get_object("spbtnDly");
        settings.bind(UPDTEDLY, widget0, 'value', Gio.SettingsBindFlags.DEFAULT);

        // Indicator style, level 1.
        let widget1 = builder.get_object('spIndicLevel1');
        settings.bind(LIMIT1, widget1, 'value', Gio.SettingsBindFlags.DEFAULT);

        // Indicator style, level 2.
        let widget2 = builder.get_object('spIndicLevel2');
        settings.bind(LIMIT2, widget2, 'value', Gio.SettingsBindFlags.DEFAULT);

        // Indicator style, level 3.
        let widget3 = builder.get_object('spIndicLevel3');
        settings.bind(LIMIT3, widget3, 'value', Gio.SettingsBindFlags.DEFAULT);

        // Indicator style, level 1.
        let widget4 = builder.get_object('spIndicLevel4');
        settings.bind(LIMIT4, widget4, 'value', Gio.SettingsBindFlags.DEFAULT);

        // Address to ping.
        let widget5 = builder.get_object('eAddress');
        settings.bind(ADDRESS, widget5, 'text', Gio.SettingsBindFlags.DEFAULT);

        return builder.get_object('prefs-container') ;
}
