"use client";

import { useState } from "react";
import {
  Settings,
  ShieldCheck,
  CreditCard,
  Globe,
  Bell,
  CheckCircle2,
  Save,
  AlertTriangle,
} from "lucide-react";
import { mockSystemSettings, SystemSettings } from "@/data/adminData";
import { toast } from "sonner";

export default function AdminSettingsClient() {
  const [settings, setSettings] = useState<SystemSettings>(mockSystemSettings);

  const handleToggle = (key: keyof SystemSettings) => {
    setSettings((prev) => {
      const updated = !prev[key];
      return { ...prev, [key]: updated };
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Platform settings updated successfully!");
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <span>Platform Configuration & Settings</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Configure site credentials, mobile payment gateways, student certificate issuance, and platform maintenance status.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition shadow-xs cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Site Information */}
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-4 shadow-xs">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
            <Globe className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>General Marketplace Info</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                Marketplace Name
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                Support Email
              </label>
              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                Helpline Hotline Number
              </label>
              <input
                type="text"
                value={settings.helplinePhone}
                onChange={(e) => setSettings({ ...settings, helplinePhone: e.target.value })}
                className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                Display Currency Symbol
              </label>
              <input
                type="text"
                value={settings.currencySymbol}
                onChange={(e) => setSettings({ ...settings, currencySymbol: e.target.value })}
                className="w-full p-2.5 text-xs rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Payment Gateways & Controls */}
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl space-y-4 shadow-xs">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
            <CreditCard className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Payment Gateway Features</span>
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-100 dark:border-gray-800">
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">bKash & Nagad Mobile Checkout</p>
                <p className="text-[11px] text-gray-500">Allow Bangladeshi students to checkout via direct mobile banking.</p>
              </div>
              <input
                type="checkbox"
                checked={settings.enableBkashPayment}
                onChange={() => handleToggle("enableBkashPayment")}
                className="w-4 h-4 text-indigo-600 accent-indigo-600 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-100 dark:border-gray-800">
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">Stripe & Global Credit Cards</p>
                <p className="text-[11px] text-gray-500">Accept international Visa, Mastercard, and Amex credit payments.</p>
              </div>
              <input
                type="checkbox"
                checked={settings.enableStripePayment}
                onChange={() => handleToggle("enableStripePayment")}
                className="w-4 h-4 text-indigo-600 accent-indigo-600 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-100 dark:border-gray-800">
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">Automated Certificate Generation</p>
                <p className="text-[11px] text-gray-500">Issue verifiable completion certificates upon course 100% completion.</p>
              </div>
              <input
                type="checkbox"
                checked={settings.enableStudentCertificates}
                onChange={() => handleToggle("enableStudentCertificates")}
                className="w-4 h-4 text-indigo-600 accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Maintenance Mode Toggle */}
        <div className="p-6 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-500" />
              <div>
                <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200">
                  Platform Maintenance Mode
                </h4>
                <p className="text-[11px] text-rose-700 dark:text-rose-300">
                  Temporarily lock non-admin user logins while performing database upgrades.
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={() => handleToggle("maintenanceMode")}
              className="w-4 h-4 text-rose-600 accent-rose-600 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-xs transition"
          >
            Save All Settings
          </button>
        </div>
      </form>
    </div>
  );
}
